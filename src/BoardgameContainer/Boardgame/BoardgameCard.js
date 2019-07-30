import React, { Component } from 'react';
import './Boardgame.css'


export default class BoardgameCard extends Component {

    render() {
        const {boardgame} = this.props
        return (
        <div className='boardgame_card'>
          <div className='img-container'>
            <img src={boardgame.image}/>
          </div>
          <div className='info-container'>
            <h3>{boardgame.name}</h3>
            <p>
              <span>{boardgame.price}</span>
            </p>
            <button onClick={()=> this.props.addToCart(boardgame.id)}>Add to Cart</button>
          </div>
        </div>
         );
    }
}
