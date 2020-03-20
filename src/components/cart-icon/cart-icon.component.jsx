import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg'
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={ toggleCartHidden }>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'> 0 </span>
  </div>
)

const mapDistpatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDistpatchToProps)(CartIcon);
