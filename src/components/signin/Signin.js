import React, { useState } from 'react';
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton';
import "./styles.signin.scss"
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'

const Signin = ({ googleSignInStart, emailSignInStart}) => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    const { email, password } = values;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        emailSignInStart(email, password)

    }

    const handleChange = e => {
        const { value, name } = e.target
        setValues({...values, [name]: value})
    }
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                        <FormInput 
                            type="email"
                            name="email"
                            label="email"
                            onChange={handleChange}
                            value={email} />
                        <FormInput 
                            type="password"
                            name="password"
                            label="password" 
                            onChange={handleChange}
                            value={password} />

                            <div className="buttons">
                                <CustomButton type="submit">SIGNIN</CustomButton>
                                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGNIN WITH GOOGLE</CustomButton>
                            </div>
                            
                </form>
            </div>
        )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(Signin)
