import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      robots: robots,
      searchfield: ''
    };


    // A function declaration is  neccesary when we make our own functions inside of a class
  onSearchChange = (event) => {
    // this.setState must use the format to operate on the elements inside. I.E (searchfield)
    this.setState({searchfield:event.target.value});
  }
  render(){
    // Assigning a function to be used in a return
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
    <h1> Loading</h1> :
  (
    <div className='tc'>
      <h1 className='f1'> RoboFriends</h1>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Cardlist robots={filteredRobots}/>
    </div>
   );
  }
}

export default App;
