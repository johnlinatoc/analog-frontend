import React from 'react';
import Api from '../services/api'

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      error: false
    }
  }
  handleUsernameChange(e){
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(e){
    e.preventDefault()
    console.log("Got Here")
  }

  render(){
    return (
      <div>
        <form onSubmit={(e)=>{this.handleLogin(e)}}>
          Username: <input onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} />
          Password: <input type="password" onChange={(e) => this.handlePasswordChange(e)} value={this.state.password} />
          <input type='submit' value='login' />
        </form>
      </div>
    );
  }
}

export default Login;
