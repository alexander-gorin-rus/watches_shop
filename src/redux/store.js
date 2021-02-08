import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
//import thunk from 'redux-thunk';


import rooteReducer from './root-reducer';

const middlewares = [logger];
//const middleware = thunk;

export const store = createStore(rooteReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)

export default { store, persistor};