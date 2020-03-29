import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

import CitiMap from '../components/maps/CitiMap';

function MapScreen() {
    return <CitiMap homeMap={false} />;
}

export default MapScreen;

