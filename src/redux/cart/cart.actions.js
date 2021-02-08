import {
    CART_DROPDOWN,
    ADD_ITEM,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM
} from '../types';

export const toggleCartHidden = () => ({
    type: CART_DROPDOWN
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
})