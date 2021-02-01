import {
    CART_DROPDOWN,
} from '../types';

const INITIAL_STATE = {
    hidden: true
}

const CartReducer = (state = INITIAL_STATE, action) => {
    const {type} = action;
    switch(type){
        case CART_DROPDOWN: {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
        default: 
            return state
    }

}

export default CartReducer;