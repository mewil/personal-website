import { actions } from '../actions';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    message: null
};

export function configurationState(state = initialState, action) {
    switch (action.type) {
        case actions.LOAD_CONFIGURATION_REQUEST:
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null
            };

        case actions.LOAD_CONFIGURATION_ERROR:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.error,
                message: action.message
            };

        case actions.LOAD_CONFIGURATION_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                message: action.message
            };

        case actions.LOAD_CONFIGURATION_FORM_SUCCESS:
            return {
                ...state,
                message: action.message
            };

        case actions.UPDATE_CONFIGURATION_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                message: action.message,
                ...action.data
            };

        default:
            return state;
    }
}
