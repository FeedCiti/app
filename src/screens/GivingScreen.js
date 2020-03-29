import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const Express = styled.Text`
    font-size: 20px;
`;

const GivingContainer = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.white};
`;

function GivingScreen() {
    return (
        <GivingContainer>
            <Express>Hi</Express>
        </GivingContainer>
    );
}

export default GivingScreen;
