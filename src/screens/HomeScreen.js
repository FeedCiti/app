import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

import Fonts from '../../config/Fonts';
import Givings from '../components/givings/Givings';
import CitiMap from '../components/maps/CitiMap';

const HomeContainer = styled.View`
    background-color: #f1f1f1;
`;

const CategoryText = styled.Text`
    font-size: 23px;
    font-family: ${Fonts.F800};
    letter-spacing: 0.5px;
    margin: 25px 0px 10px 20px;
`;

function HomeScreen() {
    return (
        <>
            <HomeContainer>
                <CitiMap homeMap />
                <ScrollView>
                    <CategoryText>Recent Givings</CategoryText>
                    <Givings />
                    <CategoryText>Recent Givings</CategoryText>
                    <Givings />
                </ScrollView>
            </HomeContainer>
        </>
    );
}

export default HomeScreen;
