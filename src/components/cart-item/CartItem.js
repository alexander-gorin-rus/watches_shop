import React from 'react';
import './styles.cart-item.scss'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="cart-item"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price} = ${quantity * price}</span>
            </div>
        </div>
    )
}

export default CartItem
