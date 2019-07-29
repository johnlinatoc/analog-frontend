import React, { Component } from 'react';
import BoardgameCard from './Boardgame/BoardgameCard'



export default class BoardgameContainer extends Component {
 
    render() { 
        const boardgames = this.props.boardgames
        return ( 
            <div>
                {boardgames.map( boardgame => {
                    return <BoardgameCard boardgame={boardgame}/>
                })}
            </div>
         );
    }
}
