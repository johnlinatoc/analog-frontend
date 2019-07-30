import React, { Component } from 'react';
import Cart from './Cart/Cart'
import Payment from './Cart/Payment'
import './Cart/cart.css'
import Button from './Cart/images/continue.png'
import Line from './Cart/images/line.png'
export default class CartContainer extends Component {

    render() {
        const cartItems = this.props.cart
        let totalCost = cartItems.reduce((accumulator, boardgame) => (boardgame.price * boardgame.quantity) + accumulator, 0)
        return (
            <div>
              <div className='cart-container'>
                <h1 className='title-container'>Shopping Cart</h1>
                <div>
                  <ul className='header-container'>
                    <li>Boardgame</li>
                    <li>Quantity</li>
                    <li>Price</li>
                  </ul>
                </div>
                <div className='bag-container'>
                  {cartItems.map( boardgame => {
                    return <Cart boardgame={boardgame} addToCart={this.props.addToCart} subtractFromCart={this.props.subtractFromCart} removeFromCart={this.props.removeFromCart} totalCost={totalCost}/>
                  })}
                </div>
                <div className='continue-button'>
                  <img src={Button}/>
                </div>
                <div className='total-container'>
                  <img src={Line} />
                  <p>
                    <span>Total Cost: {totalCost}</span>
                  </p>
                </div>
              </div>
              <button onClick={()=> this.props.checkout()}>Checkout</button>
                <Payment/>
            </div>
         );
    }
}
