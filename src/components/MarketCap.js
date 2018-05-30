import React, { Component } from 'react';

export default class MarketCap extends Component {
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
    this.fetchFirst('https://api.coinmarketcap.com/v1/ticker/?limit=10');
  }

  render() {
    return (
      <div>
        <h3>CMC Chart</h3>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price USD</th>
              <th>Price BTC</th>
              <th>percent_change_1h</th>
              <th>percent_change_24h</th>
              <th>percent_change_7d</th>
            </tr>
            {this.state.list.map(post =>
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.symbol}</td>
                <td>{post.price_usd}</td>
                <td>{post.price_btc}</td>
                <td>{post.percent_change_1h}</td>
                <td>{post.percent_change_24h}</td>
                <td>{post.percent_change_7d}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}