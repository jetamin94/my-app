import React, { Component } from 'react';
import ListWidget from './components/ListWidget';
import MarketCap from './components/MarketCap';

import './assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListWidget />
        <MarketCap />
      </div>
    );
  }
}

export default App;
