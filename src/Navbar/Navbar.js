import React, { Component } from 'react'
import Navigation from './Navigation'
import Logo from './Logo'
import Profile from '../Profile/Profile.js'


class Navbar extends Component {


    render(){
    return(
        <div className="navbar">
            <Logo />
            <Navigation auth={this.props.auth} handleLogout={this.props.handleLogout}/>
        </div>
    )
    }
}

export default Navbar
