import React from "react";
import {useSelector} from 'react-redux';
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function Navbar() {
  const {cartTotalQuantity} = useSelector(state => state.cart);
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">
          <h2>OnlineShop</h2>
        </Link>
        <Link to="/cart">
          <div className="nav-bag">
            <ShoppingCart className="icon" />
            <span className="bag-quantity">
              <span>{cartTotalQuantity}</span>
            </span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
