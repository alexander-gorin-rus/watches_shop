import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/pages/homePage/Home';
import Header from '../src/components/header/Header';
import SigInSignup from '../src/components/pages/signin-signup-signout/SigInSignup'
// import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
//import AnalogWatches from './components/AnalogWatches';
import Checkout from './components/pages/checkout/Checkout';
import Shop from './components/pages/shop/Shop';
import { auth, createUserProfileDocument } from './firebase/Firebase';
//import store from './redux/store'


class App extends React.Component{
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
            
        });
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SigInSignup />)} /> 
          </Switch>
      </BrowserRouter> 
    );
  }
} 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
}) 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(App);
