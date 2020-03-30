import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './src/store/reducers/reducers';
import theme from './config/theme';
import Navigation from './src/components/navigation/Navigation';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
console.disableYellowBox = true;

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Navigation />
            </ThemeProvider>
        </Provider>
    );
}
