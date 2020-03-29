import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import MapScreen from '../../screens/MapScreen';
import GivingScreen from '../../screens/GivingScreen';

const Stack = createStackNavigator();

const Test = styled.Text`
    font-family: '600';
    font-size: 18px;
    margin-right: 12px;
    color: ${(props) => props.theme.primary};
`;

const BackBtn = styled(Feather)`
    font-size: 22px;
    margin-left: 12px;
    color: ${(props) => props.theme.gray800};
`;

export function MapStack(props) {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Map'
                component={MapScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='GivingScreen'
                component={GivingScreen}
                options={{
                    title: null,
                    // headerLeft: () => {
                    //     return (
                    //         <TouchableOpacity onPress={() => navigation.goBack()}>
                    //             <BackBtn name='chevron-left' />
                    //         </TouchableOpacity>
                    //     );
                    // },
                    headerRight: () => {
                        return (
                            <TouchableOpacity>
                                <Test>Send</Test>
                            </TouchableOpacity>
                        );
                    },
                }}
            />
        </Stack.Navigator>
    );
}

