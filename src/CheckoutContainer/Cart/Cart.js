import React, { Component } from 'react';
import './cart.css'

export default class Cart extends Component {

    render() {

      const {boardgame} = this.props
        return (
        <div>
            <img src={boardgame.image}/>
            <h3>Name: {boardgame.name}</h3>
            <p>Quantity: {boardgame.quantity}</p>
             <p>
                <span>Price: {boardgame.price * boardgame.quantity}</span>
             </p>
             <button onClick={()=> this.props.subtractFromCart(boardgame.id)}>-</button>
             <button onClick={()=> this.props.addToCart(boardgame.id)}>+</button>
             <button onClick={()=> this.props.removeFromCart(boardgame.id)}>X</button>
         </div>
         );
    }
}
