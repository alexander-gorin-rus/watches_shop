import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './styles.cart-dropdown.scss'


const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                <CustomButton ><h5 className='cart-items-go-to'>go to checkout</h5></CustomButton>
            </div>
            
        </div>
    )
}

export default CartDropdown
