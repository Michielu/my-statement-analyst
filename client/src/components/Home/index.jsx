import React, {
  Component
} from 'react';

import {
  getAll,
  getTransID,
  postTransaction
} from '../../couriers/index'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (< div >
      < h2 > Home </h2>
      <button onClick={() => { getAll() }}> Get All Transactions</button>
      <button onClick={() => { getTransID() }}> Get Trans by iD</button>
      <button onClick={() => { postTransaction() }}> Post Transaction</button>
    </div>
    );
  }
}

export default Home;