import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import CitiMapStyles from './CitiMapStyles';

const MapContainer = styled.View`
    height: ${(props) => (props.homeMap ? '320px' : '100%')};
    box-shadow: 0px 0px 5px ${(props) => props.theme.gray350};
`;

const BtnText = styled.Text`
    font-size: 18px;
    font-family: '600';
    color: ${(props) => props.theme.primary};
`;

const mapBtnStyles = `
    flex-direction: row;
    position: absolute;
    right: 20px;
    padding: 12px 10px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

const ViewBtn = styled.TouchableOpacity`
    ${mapBtnStyles}
    top: 60px;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0px 0px 5px ${(props) => props.theme.gray350};
`;

const ViewIcon = styled(MaterialCommunityIcons)`
    font-size: 20px;
    margin-right: 5px;
    color: ${(props) => props.theme.primary};
`;

const GiveBtn = styled.TouchableOpacity`
    ${mapBtnStyles}
    bottom: 35px;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0px 0px 5px ${(props) => props.theme.gray350};
`;

const LocationIcon = styled(MaterialIcons)`
    font-size: 22px;
    align-items: center;
    justify-content: center;
    align-self: center;
    color: ${(props) => props.theme.primary};
`;

function CitiMap({ homeMap }) {
    const navigation = useNavigation();

    return (
        <MapContainer homeMap={homeMap}>
            <CitiMapStyles />
            {homeMap ? (
                <ViewBtn onPress={() => navigation.navigate('MapScreen')}>
                    <ViewIcon name='map-marker-radius' />
                    <BtnText>View Map</BtnText>
                </ViewBtn>
            ) : (
                <>
                    <GiveBtn
                        style={{ marginRight: 55 }}
                        onPress={() => navigation.navigate('GiveInput')}
                    >
                        <ViewIcon name='heart' />
                        <BtnText>Give</BtnText>
                    </GiveBtn>
                    <GiveBtn>
                        <LocationIcon name='my-location' />
                    </GiveBtn>
                </>
            )}
        </MapContainer>
    );
}

export default CitiMap;
