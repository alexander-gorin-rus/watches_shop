import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/pages/homePage/Home';
import Header from '../src/components/header/Header';
import SigInSignup from '../src/components/pages/signin-signup-signout/SigInSignup'
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import Checkout from './components/pages/checkout/Checkout';
import Shop from './components/pages/shop/Shop';
import { checkUserSession } from './redux/user/user.action';


const App = ({ checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])
  
    return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to="/" />) : (<SigInSignup />)} /> 
          </Switch>
      </BrowserRouter> 
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
}) 

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps, mapDispatchToProps)(App);
