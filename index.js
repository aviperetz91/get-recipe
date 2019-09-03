import React from 'react';
import { AppRegistry, I18nManager } from 'react-native'
import App from './App';
import {name as appName} from './app.json';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealsReducer from './src/store/reducers/mealsReducer/mealsReducer';
import inputReducer from './src/store/reducers/inputReducer/inputReducer';

I18nManager.allowRTL(false)

const rootReducer = combineReducers({
    meals: mealsReducer,
    input: inputReducer
});
  
const store = createStore(rootReducer);

const AppRedux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppRedux);
