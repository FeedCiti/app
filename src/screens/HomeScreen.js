import React from 'react';
import styled from 'styled-components';

const Example = styled.View`
    height: 300;
    background-color: red;
`;

const TextExample = styled.Text`
    font-size: 30;
`;

function HomeScreen() {
    return (
        <Example>
            <TextExample>Home</TextExample>
        </Example>
    );
}

export default HomeScreen;
