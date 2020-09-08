import { createStore } from 'redux';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {
    const store = createStore(createReducer(), initialState);

    store.injectedReducers = {};
    store.injectedSagas = {};

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }

    return store;
}
