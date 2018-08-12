import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from '.Searchbox';
import {robots} from './robots';

class App extends React.Component= () => {
  return(
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox />
      <Cardlist robots={robots}/>
    </div>

  );
}

export default App;
