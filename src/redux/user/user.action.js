import {
    SET_CURRENT_USER,
    // LOG_IN_USER,
    // LOG_OUT_USER
} from '../types';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user

})