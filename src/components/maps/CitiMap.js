import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import CitiMapStyles from './CitiMapStyles';

const MapContainer = styled.View`
    height: ${(props) => (props.homeMap ? '320px' : '100%')};
    box-shadow: 0px 0px 5px ${(props) => props.theme.gray350};
`;

const TextExample = styled.Text`
    font-size: 18px;
    font-family: '600';
    color: ${(props) => props.theme.primary};
`;

const ViewBtn = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 60px;
    right: 20px;
    padding: 12px 10px;
    align-items: center;
    border-radius: 8px;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0px 0px 5px ${(props) => props.theme.gray350};
`;

const ViewIcon = styled(MaterialCommunityIcons)`
    font-size: 20px;
    margin-right: 5px;
    color: ${(props) => props.theme.primary};
`;

function CitiMap({ homeMap }) {
    return (
        <MapContainer homeMap={homeMap}>
            <CitiMapStyles />
            <ViewBtn>
                <ViewIcon name='map-marker-radius' />
                <TextExample>View Map</TextExample>
            </ViewBtn>
        </MapContainer>
    );
}

export default CitiMap;
