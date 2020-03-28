import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

import HomeMap from '../components/maps/HomeMap';

const HomeContainer = styled.View`
    background-color: #f1f1f1;
`;

function MapScreen() {
    return (
        <>
            <HomeMap />
        </>
    );
}

export default MapScreen;

