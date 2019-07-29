import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import Api from '../services/api'
class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
          username: '',
          userID: this.props.user.user.id,
          error: false
        }
    }
    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }

    handleUsernameUpdate(e){
        e.preventDefault()
        console.log("make patch request")
        Api.updateUser(this.state)
        .then(data => console.log(data))
    }
    render(){
    return(
      <div>
        <h3>Username: {this.props.user.user.username}</h3>
        <form onSubmit={(e)=>{this.handleUsernameUpdate(e)}}>
          <input onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} />
          <input type='submit' value='Update Username' />
        </form>
      </div>
    )
    }
}

export default withRouter(Profile)
