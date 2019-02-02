import React, {
  Component
} from 'react';

import {
  getAll,
} from '../../couriers/index'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    }
  }

  async componentDidMount() {
    const allTransaction = await getAll();
    this.setState(() => {
      return { transactions: allTransaction.data };
    });
  }

  render() {
    return (< div >
      < h2 > Home </h2>
      <p>Transactions are: </p>
      {console.log(this.state.transactions)}
      {this.state.transactions.map((el) => {
        return <div key={el._id}>{el.dateOfLog}</div>
      })}
    </div>
    );
  }
}

export default Home;