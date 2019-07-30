import React, { Component } from 'react';
import BoardgameCard from './Boardgame/BoardgameCard'



export default class BoardgameContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      page: 1,
      // boardgames: this.props.boardgames,
      lastNineBoardgames: [],
    }
  }

// spliceFour = () => {
// const allBoardgames = this.state.boardgames
// const lastNineBoardgames = allBoardgames.splice(0,9)
// this.setState({ lastNineBoardgames: lastNineBoardgames })
// }

  render() {
      //let boardgames = this.state.boardgames
      const start = 10 * this.state.page
        const boardgames = this.props.boardgames.slice(start, start + 9)
      return (
          <div className="boardgame_container">
              {boardgames.map( boardgame => {
                  return <BoardgameCard boardgame={boardgame} addToCart={this.props.addToCart}/>
              })}
          </div>
       );
  }
}
