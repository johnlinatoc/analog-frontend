import React, { Component } from 'react';
import './cart.css'

export default class Cart extends Component {

    render() {

      const {boardgame} = this.props
        return (
        <div className='cart-item'>
           <img className='cart-img' src={boardgame.image}/>
           <h3 className='cart-name'>{boardgame.name}</h3>
           <button onClick={()=> this.props.subtractFromCart(boardgame.id)}>-</button>
           <p className='cart-qty'>{boardgame.quantity}</p>
           <button onClick={()=> this.props.addToCart(boardgame.id)}>+</button>
           <p className='cart-price'>
             <span>${boardgame.price * boardgame.quantity}</span>
           </p>
           <button id='x' onClick={()=> this.props.removeFromCart(boardgame.id)}>X</button>
           <hr/>
         </div>
         );
    }
}
