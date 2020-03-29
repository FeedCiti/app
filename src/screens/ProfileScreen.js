import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';

import { authLogin } from '../store/actions/action.auth';
import Fonts from '../../config/Fonts';

const GivingContainer = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${(props) => props.theme.gray300};
`;

const AuthHeader = styled.Text`
    font-size: 21px;
    color: ${(props) => props.theme.white}
    font-family: ${Fonts.F800};
`;

const AuthBtn = styled.TouchableOpacity`
    height: 56px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 12px;
    box-shadow: 0px 0px 5px ${(props) => props.theme.gray350};
    background-color: ${(props) => props.theme.giveBlue};
`;

const AuthContent = styled.View`
    margin: 12px 30px;
`;

const Profile = () => {
    const dispatch = useDispatch();

    return (
        <GivingContainer>
            <AuthContent>
                <AuthBtn
                    placeholder='PLS'
                    title='Login'
                    onPress={() => dispatch(authLogin())}
                >
                    <AuthHeader>
                        <Ionicons
                            name='logo-google'
                            style={{ fontSize: 27, marginRight: 12 }}
                        />
                        {'  '}
                        SIGN IN WITH GOOGLE
                    </AuthHeader>
                </AuthBtn>
            </AuthContent>
        </GivingContainer>
    );
};

export default Profile;
