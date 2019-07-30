import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import BoardgameContainer from '../BoardgameContainer/BoardgameContainer'
import {Link, withRouter} from 'react-router-dom';

class Logo extends Component {

    render(){
    return(
        <div className="logo-container">
          <Link to="/" >
            <img className="logo" src="https://cdn3.iconfinder.com/data/icons/brain-games/1042/Board-Games-grey.png"/>
            <h1 className="title">Analog</h1>
          </Link>
        </div>
    )
    }
}

export default Logo
