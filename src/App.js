import React, { Component } from "react";
import './App.css';
import Login from './UserStatus/Login'
import Signup from './UserStatus/Signup'
import { Route, Switch } from 'react-router-dom';
import BoardgameContainer from './BoardgameContainer/BoardgameContainer'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import CartContainer from './CartContainer/CartContainer'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardgames: [],
      auth: { user: {} },
      cart: []
     }
  }


  componentDidMount(){
    fetch('http://localhost:3000/api/v1/boardgames')
    .then(resp => resp.json())
    .then(data => this.setState({
      boardgames: data
    }))
  }

  handleLogin(user){
    this.setState({
      auth: { user }
    })
    localStorage.setItem('token', user.token)
  }

  handleLogout(user){
    this.setState({
      auth: { user: {} }
    })
    localStorage.removeItem('token')
  }

  addToCart = (boardgameId) => {
    let activeCart = this.state.cart
    const game = activeCart.find(boardgame => {return boardgame.id == boardgameId})
    const gameInfo = this.state.boardgames.find(boardgame => {return boardgame.id == boardgameId})
    if (game){
      activeCart.map(boardgame => {
        if (boardgame.id == boardgameId){return boardgame.quantity += 1}
      })
    } else {
      activeCart.push({id: boardgameId, name: gameInfo.name, image: gameInfo.image, price: gameInfo.price, quantity: 1})
    }
    this.setState({
      cart: activeCart
    })
  }

  render() { 
    return ( 
    <div>
      <Navbar auth={this.state.auth} handleLogout={()=> this.handleLogout()} cart={this.state.cart} boardgames={this.state.boardgames}/>
      <Route path="/login" render={(routeProps) => {
        return <Login {...routeProps}
        handleLogin={(user) => {this.handleLogin(user)}}/>
      }} />
      <Route path="/profile" render={(routeProps) => {
        return <Profile {...routeProps}
        user={this.state.auth}
        handleLogin={(user) => {this.handleLogin(user)}}/>
      }} />
      <Route exact path="/" render={() => {
        return <BoardgameContainer boardgames={this.state.boardgames} addToCart={(id) => {this.addToCart(id)}}/>
      }} />
      <Route path="/signup" render={(routeProps) => {
        return <Signup {...routeProps}
        handleLogin={(user) => {this.handleLogin(user)}}/>
      }} />
      <Route path="/cart" render={() => {
        return <CartContainer boardgames={this.state.boardgames} cart={this.state.cart} addToCart={(id) => {this.addToCart(id)}}/>
      }} />
    </div>
     );
  }
}

export default App;
