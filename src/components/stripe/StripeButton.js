import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IIV2sKuqrZbCksTogU6vzJuNuwaZWGzxoQLbfcKs2j0IqzFl7zjGM091aXZdy6gzyTqIQIOWMObTOjXsHLHP3NA00vgYCykjH'
    const onToken = token => {
        console.log(token);
        alert('Payment process was successfull')
    }
    
    return (
        <div>
            <StripeCheckout 
                label="Pay Now"
                name='Watches Shop'
                billingAddress
                shippingAddress
                image="image='https://image.shutterstock.com/image-photo/bangkok-thailand-january-8-expensive-260nw-50399287.jpg'"
                description={`Your total pay is $${price}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeButton
