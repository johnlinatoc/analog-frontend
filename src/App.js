import React, { Component } from "react";
import './App.css';
import BoardgameContainer from './BoardgameContainer/BoardgameContainer'
import Navbar from './Navbar/Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      boardgames: []
     }
  }

  componentDidMount(){
    fetch('http://localhost:3000/boardgames')
    .then(resp => resp.json())
    .then(data => this.setState({
      boardgames: data
    }))
  }

  render() { 
    return ( 
    <div>
      <Navbar />
      <BoardgameContainer boardgames={this.state.boardgames}/>
    </div>
     );
  }
}
 
export default App;

