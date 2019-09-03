import React from 'react';
import { Link } from "react-router-dom";
import Button from '../Cart/images/continue.png'
import Api from '../../services/api'



class Success extends React.Component {

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

  renderBoardgames(){
    console.log('!!!')
    const { boardgames } = this.props

    return boardgames.map( boardgame => {
      return boardgame.name
    })
  }

  render(){
      return (
        <div className='success-container'>
          <h1>Your boardgames are on the way!</h1>
          <p>Purchased:</p>
          <h3>{this.renderBoardgames()}</h3>
          <Link to="/">
            <div className='continue-button'>
              <img src={Button}/>
            </div>
          </Link>
        </div>
      );
    }
}

export default Success;
