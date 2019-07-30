import React, { Component } from "react";
import Header from './images/Header.png'

class HeaderWidget extends Component {

  render(){
    return(
      <div>
        <img src={Header}/>
      </div>
    )
  }
}

export default HeaderWidget
