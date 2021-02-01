import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//import thunk from 'redux-thunk';


import rooteReducer from './root-reducer';

const middlewares = [logger];
//const middleware = thunk;

const store = createStore(rooteReducer, applyMiddleware(...middlewares));

export default store;