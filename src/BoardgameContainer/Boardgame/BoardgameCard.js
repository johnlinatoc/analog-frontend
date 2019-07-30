import React, { Component } from 'react';
import './Boardgame.css'


export default class BoardgameCard extends Component {

    render() {
        const {boardgame} = this.props
        return (
        <div className='boardgame_card'>
           <img src={boardgame.image}/>
           <h3>{boardgame.name}</h3>
            <p>
               <span>{boardgame.price}</span>
            </p>
            <button onClick={()=> this.props.addToCart(boardgame.id)}>Add to Cart</button>
        </div>
         );
    }
}
