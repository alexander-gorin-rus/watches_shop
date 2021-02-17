import {
    CART_DROPDOWN,
    ADD_ITEM,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM,
    CLEAR_CART
} from '../types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

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
        case CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload)
            }
        }
        case CLEAR_CART: {
            return {
                ...state,
                cartItems: []
            }
        }
        default: 
            return state
    }

}

export default CartReducer;