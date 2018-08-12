import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
    constructor() {
      super()
      this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    // this.setState line is neccesary when we make our own functions inside of a class
    this.setState({searchfield:event.target.value})
    console.log(event.target.value);
    console.log(filteredRobots);
  }
  render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
  return(
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchchange={this.onSearchChange}/>
      <Cardlist robots={filteredRobots}/>
    </div>
   );
  }
}

export default App;
