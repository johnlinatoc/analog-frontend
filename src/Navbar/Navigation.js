import React, { Component } from 'react'
import search from './images/search.png'
import cart from './images/cart.png'
import './Navbar.css'
import {Link, withRouter} from 'react-router-dom';
class Navigation extends Component {


    render(){
    return(
      <div>
        <div className="navigation">
          <Link to="/" >
            <div >Home</div>
          </Link>
          <Link to="#" >
            <div >Boardgames</div>
          </Link>
          <Link to="#" >
            <div >New Arrivals</div>
          </Link>
          <Link to="#" >
            <div >Accessories</div>
          </Link>
          <Link to="#" >
            <div >Contact</div>
          </Link>
          {this.props.auth.user.id ?
            <a onClick={() => {
              this.props.handleLogout()
              this.props.history.push('/')
            }}>
            <div >Log out</div>
          </a>
          :
          <Link to="/login" >
            <div >Sign In</div>
          </Link>
        }
        </div>
        <div>
          <img className="cart" src={cart} style={{width: '30px'}}/>
          <img className="search" src={search} style={{width: '30px'}}/>
        </div>
      </div>
    )
    }
}

export default withRouter(Navigation)
