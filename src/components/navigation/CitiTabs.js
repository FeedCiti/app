import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from '../../screens/HomeScreen';
import MapStack from './CitiStack';
import MapScreen from '../../screens/MapScreen';

const Tabs = createMaterialBottomTabNavigator();

function CitiTabs() {
    const { NavStyles } = styles;

    return (
        <Tabs.Navigator
            initialRouteName='Home'
            activeColor='#353535'
            inactiveColor='#D3D3D3'
            barStyle={{ backgroundColor: '#fff' }}
            labeled={false}
        >
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name='home' color={color} style={NavStyles} />
                    )
                }}
                name='HomeScreen'
                component={HomeScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name='heart-multiple'
                            color={color}
                            style={NavStyles}
                        />
                    )
                }}
                name='DonateScreen'
                component={HomeScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='map' color={color} style={NavStyles} />
                    )
                }}
                name='MapStack'
                component={MapStack}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='bar-chart' color={color} style={NavStyles} />
                    )
                }}
                name='LeaderboardScreen'
                component={HomeScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='user' color={color} style={NavStyles} />
                    )
                }}
                name='ProfileScreen'
                component={HomeScreen}
            />
        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({
    NavStyles: {
        fontSize: 25
    }
});

export default CitiTabs;
