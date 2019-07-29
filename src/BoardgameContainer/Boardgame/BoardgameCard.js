import React, { Component } from 'react';


export default class BoardgameCard extends Component {
    
    render() { 
        return ( 
        <div>
           <img src={this.props.boardgame.image}/>
        </div>
         );
    }
}
