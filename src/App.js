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

    // A function declaration is  neccesary when we make our own functions inside of a class
  onSearchChange = (event) => {
    // this.setState must use the format to operate on the elements inside. I.E (searchfield)
    this.setState({searchfield:event.target.value})
    // console.log(event.target.value);
    // console.log(filteredRobots);
  }
  render(){
    // Assigning a function to be used in a return
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
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
