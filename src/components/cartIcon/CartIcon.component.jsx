import React from "react";

import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";



const CartIcon = ({toggleCartHidden, itemCount}) => {

   return (<div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
         {itemCount}
      </span>
   </div>);

}

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
});

 const mapStateToProps = dispatch =>({cart : {cartItems}}) => ({
    itemCount : cartItems.reduce((total, cartItem)=>total + cartItem.quantity,0)
 })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);