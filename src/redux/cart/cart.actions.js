import {
    CART_DROPDOWN,
    ADD_ITEM
} from '../types';

export const toggleCartHidden = () => ({
    type: CART_DROPDOWN
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})