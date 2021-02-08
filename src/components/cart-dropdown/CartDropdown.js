import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './styles.cart-dropdown.scss'
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))    
                    )
                    : (
                        <span className="empty-message">Your cart is empty</span>
                    )
                }
            </div>
                <CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                    }} ><h5 className='cart-items-go-to'>go to checkout</h5></CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
