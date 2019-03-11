import React, {
  Component
} from 'react';

import { Card, Table, Tag } from 'antd';

import {
  getAll,
  getLabels,
} from '../../couriers/index'

import {
  convertDate
} from '../../utils'

import {
  TableFormat
} from '../../utils'


class AllTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      labels: []
    }
  }

  async componentDidMount() {
    const allTransaction = await getAll();
    const allLabels = await getLabels();
    this.setState({
      transactions: allTransaction.data,
      labels: allLabels
    });
  }

  render() {
    return (
      <TableFormat transactions={this.state.transactions} labels={this.state.labels} toggleAllTrans={this.props.toggleAllTrans} />
    )
  }
}

export default AllTransactions;