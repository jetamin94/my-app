import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class ListWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  fetchFirst(url) {
    var that = this;
    if (url) {
      fetch(url).then(response => response.json())
        .then(function (result) {
          that.setState({
            list: result
          });
        });
    }
  }
  componentWillMount() {
    const script = document.createElement("script");
    script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}


