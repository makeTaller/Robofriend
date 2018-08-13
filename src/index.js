import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';
// import Cardlist from './Cardlist';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import {robots} from './robots.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
