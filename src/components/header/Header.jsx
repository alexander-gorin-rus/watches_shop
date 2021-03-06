import React from 'react';
import { ReactComponent as Logo } from '../../assets/home.svg'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcom';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
import { signOutStart } from '../../redux/user/user.action'


const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
           <LogoContainer to="/">
               <Logo className="logo" />
           </LogoContainer>
           <OptionsContainer>
               <OptionLink to="/shop" >
                   SHOP
               </OptionLink>
               <OptionLink to="/contacts" >
                   CONTACTS
               </OptionLink>
               {
                   currentUser ? (
                        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                   ) : (
                        <OptionLink to="/signin" >
                            SIGN IN
                        </OptionLink>  
                   )
               }
               <CartIcon />
           </OptionsContainer>
           {hidden ? null : <CartDropdown />}
           
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
