import React from 'react';
import { Link } from "react-router-dom";



class Success extends React.Component {

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
        <p>Purchased Boardgames:</p>
        <h3>{this.renderBoardgames()}</h3>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }
}

export default Success;
