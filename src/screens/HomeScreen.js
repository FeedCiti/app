import React from 'react';
import styled from 'styled-components';

import Givings from '../components/givings/Givings';

const HomeContainer = styled.View`
    flex: 1;
    background-color: #f1f1f1;
`;

const CategoryText = styled.Text`
    font-size: 26px;
    margin: 100px 0px 10px 20px;
    font-family: '800';
`;

function HomeScreen() {
    return (
        <>
            <HomeContainer>
                <CategoryText>Recent Givings</CategoryText>
                <Givings />
            </HomeContainer>
        </>
    );
}

export default HomeScreen;
