import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ListWidget from './components/ListWidget';
import MarketCap from './components/MarketCap';

import './assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col md={9}>
            <ListWidget />
          </Col>
          <Col md={3}>
            <MarketCap />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
