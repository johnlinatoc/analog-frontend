import React, { Component } from "react";
import './App.css';
import Login from './Login/Login'
import { Route, Switch } from 'react-router-dom';
import BoardgameContainer from './BoardgameContainer/BoardgameContainer'
import Navbar from './Navbar/Navbar'

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
        return <Login {...routeProps} handleLogin={(user) => {this.handleLogin(user)}}/>
      }} />
      <BoardgameContainer boardgames={this.state.boardgames}/>
    </div>
     );
  }
}
 
export default App;

