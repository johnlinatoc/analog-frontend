import React, { Component } from 'react';
import BoardgameCard from './Boardgame/BoardgameCard'



export default class BoardgameContainer extends Component {

    render() {
        let boardgames = this.props.boardgames
        boardgames = boardgames.slice(0, 9)
        return (
            <div className="boardgame_container">
                {boardgames.map( boardgame => {
                    return <BoardgameCard boardgame={boardgame} addToCart={this.props.addToCart}/>
                })}
            </div>
         );
    }
}
