import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

import Givings from '../components/givings/Givings';
import HomeMap from '../components/maps/HomeMap';

const HomeContainer = styled.View`
    background-color: #f1f1f1;
`;

const CategoryText = styled.Text`
    font-size: 26px;
    margin: 30px 0px 10px 20px;
    font-family: '800';
`;

function HomeScreen() {
    return (
        <>
            <HomeContainer>
                <HomeMap />
                <ScrollView>
                    <CategoryText>Recent Givings</CategoryText>
                    <Givings />
                </ScrollView>
            </HomeContainer>
        </>
    );
}

export default HomeScreen;

