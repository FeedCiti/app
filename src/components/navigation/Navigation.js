import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CitiTabs from './CitiTabs';

function Navigation() {
    return (
        <NavigationContainer>
            <CitiTabs />
        </NavigationContainer>
    );
}

export default Navigation;
