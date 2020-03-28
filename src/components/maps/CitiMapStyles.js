import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components/native';
import { customMapStyle } from './MapStyles';

const MapStyles = styled(MapView)`
    width: 100%;
    height: 100%;
`;

function CitiMapStyles() {
    return (
        <MapStyles
            provider={PROVIDER_GOOGLE}
            customMapStyle={customMapStyle}
            showsUserLocation={true}
        />
    );
}

export default CitiMapStyles;
