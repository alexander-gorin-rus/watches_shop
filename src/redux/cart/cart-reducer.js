import {
    CART_DROPDOWN,
    ADD_ITEM
} from '../types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type){
        case CART_DROPDOWN: {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
        case ADD_ITEM: {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            }
        }
        default: 
            return state
    }

}

export default CartReducer;