import React from 'react';
import './styles.header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/home.svg'
import {auth} from '../../firebase/Firebase'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcom';
import CartDropdown from '../cart-dropdown/CartDropdown';


const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
           <Link className="logo-container " to="/">
               <Logo className="logo" />
           </Link>
           <div className="options">
               <Link className="option" to="/shop" >
                   SHOP
               </Link>
               <Link className="option" to="/contacts" >
                   CONTACTS
               </Link>
               {
                   currentUser ? (
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                   ) : (
                        <Link className="option" to="/signin" >
                            SIGN IN
                        </Link>  
                   )
               }
               <CartIcon />
           </div>
           {hidden ? null : <CartDropdown />}
           
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)