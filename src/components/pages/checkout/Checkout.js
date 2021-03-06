import React from 'react';
import './styles.checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart-selectors'
//import { setCurrentUser } from '../../../redux/user/user.action';
import CheckoutItem from '../../checkout-item/CheckoutItem';
import StripeButton from '../../stripe/StripeButton'; 

const Checkout = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div><div className="header-block">
                    <span>Description</span>
                </div><div className="header-block">
                    <span>Quantity</span>
                </div><div className="header-block">
                    <span>Price</span>
                </div><div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )}

            <div className="total">TOTAL: ${total}</div>
            <div className="test-warning">
                *Please use the following test credit cart for payments*
                <br />
                4242 4242 4242 4242 - exp: 12/23 - CVV: 123
                 <StripeButton price={total} />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
