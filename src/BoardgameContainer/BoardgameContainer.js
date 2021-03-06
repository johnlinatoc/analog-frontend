import React, { Component } from 'react';
import BoardgameCard from './Boardgame/BoardgameCard';
import arrows from './images/arrow.png';
import './Boardgame/Boardgame.css';
import sidebar from './images/Sidebar.png';
import Api from '../services/api';
import { withRouter } from 'react-router-dom';


class BoardgameContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      page: 0,
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if(!token) {
      // this.props.history.push('/login')
    }
    else {
      Api.currentUser(token)
        .then(data => {
          if(data.error){
            this.props.history.push('/login')
          } else {
            this.props.handleLogin(data)
          }
        })
    }
  }

  pageForward = (e) => {
    e.preventDefault()
    let start = this.state.page;
    if (start <= 8) {
      start += 1
      this.setState({
        page: start
      })
    }
  }

  pageBack = (e) => {
    e.preventDefault()
    let start = this.state.page;
    if (start >= 1){
      start -= 1
      this.setState({
        page: start
      })
    } else {return null}
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
                <a onClick={(e)=>this.pageBack(e)} className="page-back"> left </a>
                <a onClick={(e)=>this.pageForward(e)} className="page-forward"> right </a>
              </div>
          </div>
       );
  }
}

export default withRouter(BoardgameContainer)
