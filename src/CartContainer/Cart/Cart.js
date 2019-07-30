import React, { Component } from 'react';


export default class Cart extends Component {
    
    render() { 
      
        return ( 
        <div>
            <img src={this.props.boardgame.image}/>
            <h3>{this.props.boardgame.name}</h3>
             <p>
                <span>{this.props.boardgame.price}</span> 
             </p>
             <button onClick={()=> this.props.addToCart(this.props.boardgame.id)}>Add to Cart</button>
         </div>
         );
    }
}
