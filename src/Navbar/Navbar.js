import React, { Component } from 'react'
import Navigation from './Navigation'
import Logo from './Logo'


class Navbar extends Component {


    render(){
    return(
        <div className="navbar">
            <Logo />
            <Navigation />
        </div>
    )
    }
}

export default Navbar
