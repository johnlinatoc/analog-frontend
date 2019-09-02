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
            <span>${boardgame.price}</span>
            <br/><br/>
            <button
            onClick={()=> {
              this.props.addToCart(boardgame.id);
              alert('Item added to Cart!');
            }}>Add to Cart</button>
          </div>
        </div>
         );
    }
}
