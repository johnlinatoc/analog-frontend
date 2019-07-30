import React, { Component } from 'react';
import Cart from './Cart/Cart'
import Payment from './Cart/Payment'
export default class CartContainer extends Component {
    
    render() { 
        const cartItems = this.props.cart
        let totalCost = cartItems.reduce((accumulator, boardgame) => (boardgame.price * boardgame.quantity) + accumulator, 0)
        return ( 
            <div>
                {cartItems.map( boardgame => {
                    return <Cart boardgame={boardgame} addToCart={this.props.addToCart} subtractFromCart={this.props.subtractFromCart} removeFromCart={this.props.removeFromCart} totalCost={totalCost}/>
                })}
                <p>
                    <span>Total Cost: {totalCost}</span> 
                </p>
                <button onClick={()=> this.props.checkout()}>Checkout</button>
                <Payment/>
            </div>
         );
    }
}
