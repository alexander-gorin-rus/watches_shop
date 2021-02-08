import { CREATE_SHOP_DIRECTORY } from '../types';
import SHOP_DATA from './SHOP_DATA';

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type){
        case CREATE_SHOP_DIRECTORY: 
        return {
            ...state,
            payload: []
        }
        default:
        return state
    }
}

export default shopReducer;