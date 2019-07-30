import React, { Component } from 'react';
import Cart from './Cart/Cart'

export default class CartContainer extends Component {
    
    render() { 
        const cartItems = this.props.cart
        return ( 
            <div>
                {cartItems.map( boardgame => {
                    return <Cart boardgame={boardgame} addToCart={this.props.addToCart}/>
                })}
            </div>
         );
    }
}
