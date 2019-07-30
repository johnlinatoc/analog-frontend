import React, { Component } from "react";
import Header from './images/Header.png'
import '../HeaderContainer/header.css'
class HeaderWidget extends Component {

  render(){
 
    return(
      <div className="header">
        <img  className="header" src={Header} />
      </div>
    )
  }
}

export default HeaderWidget
