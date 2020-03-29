import React from 'react';
import { View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { authLogin } from '../store/actions/action.auth';

const Express = styled.Text`
    font-size: 20px;
`;

const Tester1 = styled.Text`
    font-size: 20px;
    margin-top: 100px;
`;

const GivingContainer = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.white};
`;

const Test = styled.TouchableOpacity`
    margin-top: 50px;
    height: 52px;
    background-color: red;
`;

const Profile = () => {
    const dispatch = useDispatch();
    const { USER, isLoading, ERROR } = useSelector((state) => ({
        USER: state.authReducer.user,
        isLoading: state.authReducer.user,
        ERROR: state.authReducer.error
    }));

    return (
        <GivingContainer>
            <Tester1>{JSON.stringify(USER)}</Tester1>
            <Tester1>{JSON.stringify(isLoading)}</Tester1>
            <Tester1>{JSON.stringify(ERROR)}</Tester1>
            <Test title='Login' onPress={() => dispatch(authLogin())}>
                <Express>Login amigo</Express>
            </Test>
        </GivingContainer>
    );
};

export default Profile;
