import React from "react";
import "./Header.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";


function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo amazon"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header_searchInput" />
        <SearchSharpIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        
        <div onClick={ handleAuthentication} className="header_option">
          <span className="header_optionLineOne"> Hello {!user? 'Guest': user.email} </span>
         <Link to= {!user && "/Login"}>
          <span className="header_optionLinetwo"> {user? 'Sign out' : 'Sign In'}  </span>
          </Link>
          
        </div>
      

        <div className="header_option">
          <span className="header_optionLineOne"> Returns</span>
          <span className="header_optionLinetwo"> & Orders </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> Your</span>
          <span className="header_optionLinetwo"> Prime </span>
        </div>

        <div className="header_optionBasket">
          <Link to="/Checkout">
            <ShoppingBasket />
            <span className="header__optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
