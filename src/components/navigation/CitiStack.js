import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import Fonts from '../../../config/Fonts';

import MapScreen from '../../screens/MapScreen';
import GivingScreen from '../../screens/GivingScreen';

const Stack = createStackNavigator();

const Test = styled.Text`
    font-size: 18px;
    margin-right: 12px;
    font-family: ${Fonts.F700};
    color: ${(props) => props.theme.primary};
`;

const BackBtn = styled(Feather)`
    font-size: 22px;
    margin-left: 12px;
    color: ${(props) => props.theme.gray800};
`;

function MapStack() {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Map'
                component={MapScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='GiveInput'
                component={GivingScreen}
                options={{
                    title: null,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <BackBtn name='chevron-left' />
                            </TouchableOpacity>
                        );
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity>
                                <Test>Send</Test>
                            </TouchableOpacity>
                        );
                    }
                }}
            />
        </Stack.Navigator>
    );
}

export default MapStack;
