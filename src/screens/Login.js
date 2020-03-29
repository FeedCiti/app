import React from 'react';
import { View, Button } from 'react-native';
import styled from 'styled-components';
import auth from '../utils/auth';
import axios from 'axios';

const axe = axios.create();

axe.interceptors.request.use((request) => {
    console.log(`REQUEST: ${JSON.stringify(request)}`);
    return request;
});

const Express = styled.Text`
    font-size: 20px;
`;

const GivingContainer = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.white};
`;

function login() {
    auth.webAuth
        .authorize({ scope: 'openid email profile' })
        .then((credentials) => {
            console.log(credentials);
            axe.get('https://feedciti.com/profile', {
                headers: {
                    Authorization: `Bearer ${credentials.idToken}`
                }
            }).then((res) => {
                console.log(`API RESP: ${JSON.stringify(res)}`);
            });
        })
        .catch((err) => console.log(err));
}

function Login() {
    return (
        <GivingContainer>
            <Button title='Loginn' onPress={login} />
            <Express>Hi</Express>
        </GivingContainer>
    );
}

export default Login;
