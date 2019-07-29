import React, { Component } from 'react';


export default class BoardgameCard extends Component {
    
    render() { 
        console.log(typeof this.props.boardgame.image)
        return ( 
        <div>
           <img src={this.props.boardgame.image}/>
        </div>
         );
    }
}
