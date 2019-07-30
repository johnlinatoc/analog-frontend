import React, { Component } from 'react';


export default class Cart extends Component {
    
    render() { 
      console.log(this.props.boardgame)
      const {boardgame} = this.props
        return ( 
            <div>
            <img src={boardgame.image}/>
            <h3>{boardgame.name}</h3>
             <p>
                <span>{boardgame.price * boardgame.quantity}</span> 
             </p>
             <button onClick={()=> this.props.subtractFromCart(boardgame.id)}>-</button>
             <button onClick={()=> this.props.addToCart(boardgame.id)}>+</button>
         </div>
         );
    }
}
