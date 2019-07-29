import React, { Component } from "react";
import './App.css';
import Login from './UserStatus/Login'
import Signup from './UserStatus/Signup'
import { Route, Switch } from 'react-router-dom';
import BoardgameContainer from './BoardgameContainer/BoardgameContainer'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      boardgames: [],
      auth: { user: {} }
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

  render() { 
    return ( 
    <div>
      <Navbar auth={this.state.auth} handleLogout={()=> this.handleLogout()}/>
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
        return <BoardgameContainer boardgames={this.state.boardgames}/>
      }} />
      <Route path="/signup" render={(routeProps) => {
        return <Signup {...routeProps} 
        handleLogin={(user) => {this.handleLogin(user)}}/>
      }} />
    </div>
     );
  }
}
 
export default App;

