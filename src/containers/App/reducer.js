import { CALCULATION, GET_USER_DATA } from './constants';
import DummyData from 'data/dummyData';

const initialState = {
    users: DummyData,
    selected: [],
    calculation: {
        submitting: null,
        error: null,
        result: null,
    },
};

function appReducer(state = initialState, action) {
    const { error, result } = action.payload || {};

    switch (action.type) {
        case CALCULATION:
            return {
                ...state,
                calculation: {
                    submitting: true,
                    error: false,
                },
            };
        case GET_USER_DATA:
            return {
                ...state,
                // users,
            };
        default:
            return state;
    }
}

export default appReducer;
