import React from 'react'
import "./styles.signin-signup.scss"
import Signin from '../../../components/signin/Signin';
import Signup from '../../sing-up/Singup'

const SigInSignup = () => {
    return (
        <div className='sign-in-and-sign-up'>
           <Signin /> 
           <Signup />
        </div>
    )
}

export default SigInSignup
