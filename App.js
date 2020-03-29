<<<<<<< HEAD
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import styled, { ThemeProvider } from 'styled-components/native';
=======
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
>>>>>>> native
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './src/store/reducers/reducers';
import theme from './config/theme';
import Navigation from './src/components/navigation/Navigation';

const composeEnhancers = compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

<<<<<<< HEAD
const getFonts = () => {
    return Font.loadAsync({
        500: require('./assets/fonts/SofiaProMedium.ttf'),
        600: require('./assets/fonts/SofiaProBold.ttf'),
        800: require('./assets/fonts/SofiaProBlack.ttf'),
    });
};

export default function App() {
    const [fontsLoaded, setFonts] = useState(false);

    if (fontsLoaded) {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Navigation />
                </ThemeProvider>
            </Provider>
        );
    }

    return <AppLoading startAsync={getFonts} onFinish={() => setFonts(true)} />;
=======
export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Navigation />
            </ThemeProvider>
        </Provider>
    );
>>>>>>> native
}
