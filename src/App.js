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

  addToCart = (id) => {
    const prevCart = this.state.cart
    const game = this.state.boardgames.find(boardgame => {
      return boardgame.id == id
    })
    this.setState({
      cart: [...prevCart, game]
    })
    console.log(this.state.cart)
  }

  render() { 
    return ( 
    <div>
      <Navbar auth={this.state.auth} handleLogout={()=> this.handleLogout()} cart={this.state.cart}/>
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

