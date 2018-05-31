import React, { Component } from 'react';
import { ETHERSCAN_KEY, MY_WALLET } from './Config';
import { cp } from '../common';

export default class ListWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{}]
    }
  }

  getRequest(url) {
    let that = this;
    if (url) {
      fetch(url).then(response => response.json())
        .then(function (result) {
          console.log(result)
          if (result.result[0].hash !== that.state.list[0].hash) {
            that.setState({
              list: result.result
            });
          }
        });
    }
  }

  getTokensTranfer(address, apikey, obj) {
    const params = cp(obj)
    const baseUrl = 'http://api.etherscan.io/api?module=account';
    const {
      action,
      startblock,
      endblock,
      page,
      offset,
      sort,
    } = params
    address = '&address=' + address;
    apikey = '&apikey=' + apikey;
    let result;
    if (startblock) {
      // Returns up to a maximum of the last 10000 transactions only
      result = baseUrl + action + address + startblock + endblock + sort + apikey;
    } else {
      // To get paginated results use page=<page number> and offset=<max records to return
      result = baseUrl + action + address + page + offset + sort + apikey;
    }

    return result;
  }

  render() {
    console.log('Render!!!!!!!')

    setInterval(() => {
      const params = {
        // startblock: 1,
        // endblock: 10,
        action: 'tokentx',
        page: 1,
        offset: 10,
        sort: 'desc'
      }
      this.getRequest(this.getTokensTranfer(MY_WALLET, ETHERSCAN_KEY, params))
    }, 30000)
    if (!this.state.list) return <div></div>
    return (
      <div>
        {/* <ul>
          {this.state.list.map(val => <li>{val.tokenSymbol}</li>)}
        </ul> */}
      </div>
    )
  }
}


