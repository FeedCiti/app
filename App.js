import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import styled, { ThemeProvider } from 'styled-components/native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/store/reducers/reducers';

import theme from './config/theme';

const composeEnhancers = compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

const Title = styled.Text`
    font-size: 24px;
    padding: 20px;
    font-family: 'SofiaProBold';
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};
`;

const getFonts = () => {
    return Font.loadAsync({
        SofiaProMedium: require('./assets/fonts/SofiaProMedium.ttf'),
        SofiaProBold: require('./assets/fonts/SofiaProBold.ttf'),
        SofiaProBlack: require('./assets/fonts/SofiaProBlack.ttf'),
    });
};

export default function App() {
    const [fontsLoaded, setFonts] = useState(false);

    if (fontsLoaded) {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <View style={styles.container}>
                        <Title>Hello there</Title>
                    </View>
                </ThemeProvider>
            </Provider>
        );
    }

    return <AppLoading startAsync={getFonts} onFinish={() => setFonts(true)} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'SofiaProBlack',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
