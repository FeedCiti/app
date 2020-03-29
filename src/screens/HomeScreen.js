import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

import Fonts from '../../config/Fonts';
import Givings from '../components/givings/Givings';
import CitiMap from '../components/maps/CitiMap';
import Charities from '../components/charities/Charities';
import { HEALTH, FEATURED } from '../components/charities/CharityTypes';

const HomeContainer = styled.View`
    flex: 1;
    background-color: #f1f1f1;
`;

const CategoryText = styled.Text`
    font-size: 23px;
    font-family: ${Fonts.F800};
    letter-spacing: 0.5px;
    margin: 15px 0px 10px 20px;
`;

function HomeScreen() {
    return (
        <>
            <HomeContainer>
                <CitiMap homeMap />
                <ScrollView>
                    <CategoryText>Recent Givings</CategoryText>
                    <Givings />
                    <CategoryText>Featured Projects</CategoryText>
                    <Charities charityType={FEATURED} />
                    <CategoryText>In Need of Help</CategoryText>
                    <Charities charityType={HEALTH} />
                </ScrollView>
            </HomeContainer>
        </>
    );
}

export default HomeScreen;
