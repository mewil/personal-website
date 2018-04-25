import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { theme } from './theme.js';
import { configurationState } from './configuration.js';

const rootReducer = combineReducers({
    router: routerReducer,
    theme,
    configurationState
});

export default rootReducer;
