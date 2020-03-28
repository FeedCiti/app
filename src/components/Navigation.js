import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    Entypo,
} from '@expo/vector-icons';
import styled from 'styled-components';
import HomeScreen from '../screens/HomeScreen';

const Tabs = createMaterialBottomTabNavigator();

function Navigation() {
    const { NavStyles } = styles;

    return (
        <NavigationContainer>
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
                        ),
                    }}
                    name='home'
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
                        ),
                    }}
                    name='donate'
                    component={HomeScreen}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name='map' color={color} style={NavStyles} />
                        ),
                    }}
                    name='map'
                    component={HomeScreen}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name='bar-chart'
                                color={color}
                                style={NavStyles}
                            />
                        ),
                    }}
                    name='leaderboard'
                    component={HomeScreen}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name='user' color={color} style={NavStyles} />
                        ),
                    }}
                    name='profile'
                    component={HomeScreen}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    NavStyles: {
        fontSize: 25,
    },
});

export default Navigation;
