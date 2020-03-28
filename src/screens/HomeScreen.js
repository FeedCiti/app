import React from 'react';
import styled from 'styled-components';
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { customMapStyle } from '../components/maps/MapStyles';

const Example = styled.View`
    height: 300px;
    background-color: red;
`;

const TextExample = styled.Text`
    font-size: 18;
`;

function HomeScreen() {
    return (
        <Example>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                customMapStyle={customMapStyle}
                showsUserLocation={true}
            ></MapView>
            <TouchableOpacity style={styles.mapBtn}>
                <TextExample>View Map</TextExample>
            </TouchableOpacity>
        </Example>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: 300
    },
    mapBtn: {
        position: 'absolute',
        top: 60,
        right: 20,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 8,
        width: 120,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});
