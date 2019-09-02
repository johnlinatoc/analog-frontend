import React, { Component } from "react";
import './App.css';
import Login from './UserStatus/Login'
import Signup from './UserStatus/Signup'
import { Route, Switch } from 'react-router-dom';
import BoardgameContainer from './BoardgameContainer/BoardgameContainer'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import CartContainer from './CheckoutContainer/CartContainer'
import HeaderWidget from './HeaderContainer/HeaderWidget'
import Success from './CheckoutContainer/Cart/Success'
import Sidebar from './Sidebar.png'
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

  subtractFromCart = (boardgameId) => {
    let activeCart = this.state.cart
    activeCart.map(boardgame => {
      if (boardgame.id == boardgameId && boardgame.quantity > 1){return boardgame.quantity -= 1}
    })
    this.setState({
      cart: activeCart
    })
  }


  removeFromCart = (boardgameId) => {
    let activeCart = this.state.cart
    const filteredCart = activeCart.filter(boardgame => {
      if (!boardgame.id == boardgameId){
        return boardgame
      }
    })
    this.setState({
      cart: filteredCart
    })
  }

  render() { 
    return ( 
    <div className="wrapper">
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
        return <div >
            <HeaderWidget />
            <div className="body-container">
              <div className="filter">
                <img src={Sidebar} />
              </div>
            <BoardgameContainer boardgames={this.state.boardgames} addToCart={(id) => {this.addToCart(id)}}/>
            </div>
          </div>
      }} />
      <Route path="/signup" render={(routeProps) => {
        return <Signup {...routeProps}
        handleLogin={(user) => {this.handleLogin(user)}}/>
      }} />
      <Route path="/cart" render={(routeProps) => {
        return <CartContainer boardgames={this.state.boardgames} cart={this.state.cart} addToCart={(id) => {this.addToCart(id)}} subtractFromCart={(id) => {this.subtractFromCart(id)}} removeFromCart={(id) => {this.removeFromCart(id)}}
        checkout={this.checkout} {...routeProps}/>
      }} />
      <Route path="/success" render={() => {
        return <Success />
      }} />
    </div>
     );
  }
}

export default App;
