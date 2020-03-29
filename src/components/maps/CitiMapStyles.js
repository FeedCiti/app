import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
    'pk.eyJ1IjoiZGFtYW5zIiwiYSI6ImNrOGIzcXJwbTA0b2QzZXF1NGswdHZ2M3EifQ.Lv2yJfahkbMAQj0A2emlMw'
);

const MapStyles = styled(MapboxGL.MapView)`
    width: 100%;
    height: 100%;
`;

function CitiMapStyles() {
    return (
        <MapStyles styleURL={'mapbox://styles/mapbox/light-v10'}>
            <MapboxGL.UserLocation />
        </MapStyles>
    );
}

export default CitiMapStyles;
