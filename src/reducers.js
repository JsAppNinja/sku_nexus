import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import globalReducer from 'containers/App/reducer';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        global: globalReducer,
        toastr: toastrReducer,
        ...injectedReducers,
    });

    return rootReducer;
}
