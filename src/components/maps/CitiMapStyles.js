import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import _ from 'lodash';
import MapboxGL from '@react-native-mapbox-gl/maps';
import feedciti from '../../apis/feedciti';

// TODO REMOVE
import Geolocation from '@react-native-community/geolocation';

MapboxGL.setAccessToken(
    'pk.eyJ1IjoiZGFtYW5zIiwiYSI6ImNrOGIzcXJwbTA0b2QzZXF1NGswdHZ2M3EifQ.Lv2yJfahkbMAQj0A2emlMw'
);

const MapStyles = styled(MapboxGL.MapView)`
    width: 100%;
    height: 100%;
`;

const getNearby = () => {};

function CitiMapStyles() {
    const [banks, setBanks] = useState([]);
    const { TOKEN } = useSelector((state) => ({
        TOKEN: state.authReducer.token
    }));

    const setup = () => {
        Geolocation.getCurrentPosition((pos) => {
            if (TOKEN === null) {
                return;
            }

            const data = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                dis: 100
            };

            const banks = [];

            feedciti
                .get('/api/nearby' + toQueryStr(data), {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`
                    }
                })
                .then((res) => {
                    res.data.banks.forEach((bank) => {
                        let coord = [bank.lon, bank.lat];
                        banks.push({ name: bank.name, coords: coord });
                    });
                    //console.log(JSON.stringify(banks));
                    setBanks(banks);
                });
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setup();
            if (banks.length > 0) {
                console.log('has');
            }
        }, 1000);
    }, []);

    return (
        <>
            {_.isEmpty(banks) ? (
                <MapStyles styleURL={'mapbox://styles/mapbox/light-v10'}>
                    <MapboxGL.UserLocation />
                </MapStyles>
            ) : (
                <MapStyles styleURL={'mapbox://styles/mapbox/light-v10'}>
                    {Object.keys(banks).map((key, index) => {
                        //console.log(`BANK: ${JSON.stringify(banks[index])}`);
                        return (
                            <MapboxGL.PointAnnotation
                                id={banks[index].name}
                                key={banks[index].name}
                                coordinate={banks[index].coords}
                            />
                        );
                    })}
                    <MapboxGL.UserLocation />
                </MapStyles>
            )}
        </>
    );
}

export default CitiMapStyles;

function toQueryStr(params) {
    return (
        '?' +
        Object.entries(params)
            .map(
                ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
            )
            .join('&')
    );
}
