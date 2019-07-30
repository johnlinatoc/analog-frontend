import React, { Component } from 'react';
import BoardgameCard from './Boardgame/BoardgameCard'
import arrows from './images/arrow.png'
import './Boardgame/Boardgame.css'


export default class BoardgameContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      page: 0,
      // boardgames: this.props.boardgames,
      lastNineBoardgames: [],
    }
  }

// spliceFour = () => {
// const allBoardgames = this.state.boardgames
// const lastNineBoardgames = allBoardgames.splice(0,9)
// this.setState({ lastNineBoardgames: lastNineBoardgames })
// }

  pageForward = (e) => {
    e.preventDefault()
    let start = this.state.page;
    start += 1
    this.setState({
      page: start
    })
    console.log('working')
  }

  render() {
      //let boardgames = this.state.boardgames
      const start = 10 * this.state.page
        const boardgames = this.props.boardgames.slice(start, start + 9)
      return (
          <div className="boardgame_container">
              {boardgames.map( boardgame => {
                  return <BoardgameCard boardgame={boardgame} addToCart={this.props.addToCart}/>
              })}
              <div className='pagination'>
                <img src={arrows} className="arrows"/>

                <a className="page-back"> left </a>
                <a onClick={(e)=>this.pageForward(e)} className="page-forward"> right </a>
              </div>
          </div>
       );
  }
}
