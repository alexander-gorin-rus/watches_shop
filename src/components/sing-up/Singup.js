import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signUpStart } from '../../redux/user/user.action';

const Signup = ({ signUpStart }) => {
    const [values, setValues] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const { displayName, email, password, confirmPassword } = values

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password })
    }

    const handleChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit} >
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={handleChange}
                        label="Display name"
                        required
                    />
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        label="Email"
                        required
                    />       
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        label="Password"
                        required
                    /> 
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        label="Confirm Password"
                        required
                    /> 
                    <CustomButton type='submit'>SIGN UP</CustomButton>      
                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(Signup);