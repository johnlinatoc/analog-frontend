import React, { Component } from 'react'
import search from './images/search.png'
import cart from './images/cart.png'
import './Navbar.css'
import {Link, withRouter} from 'react-router-dom';
class Navigation extends Component {


    render(){
    return(
      <div className='navigation-container'>
        <div className="navigation">
          <Link to="/" >
            <div >Home</div>
          </Link>
          {this.props.auth.user.id ?
            <div className='sub-navigation'>
            <Link to="/profile">
              <div>Profile</div>
            </Link>
            <a onClick={() => {
              this.props.handleLogout()
              this.props.history.push('/')
            }}>
            <div >Log out</div>
          </a>
          </div>
          :
          <Link to="/login" >
            <div >Sign In</div>
          </Link>
        }
        </div>
        <div className='button-container'>
        <Link to="/cart" >
          <img className="cart" src={cart} style={{width: '30px'}}/>
        </Link>
        </div>
      </div>
    )
    }
}

export default withRouter(Navigation)
