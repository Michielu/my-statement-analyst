import React, {
  Component
} from 'react';

import { Card, Button, List, Popconfirm } from 'antd';

import { deleteTransaction } from '../../couriers'
import { message, convertDate } from '../../utils'


class IndividualTrans extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let trans = this.props.transactions;
    let data = [
      "Cost: " + trans.cost,
      "Date of Log: " + convertDate(trans.dateOfLog),
      "Date of Purchase: " + convertDate(trans.dateOfPurchase),
      "Labels: " + trans.labels,
      "Notes: " + trans.notes
    ];

    const popConformTitle = "Are you sure you want to delete transaction? This action cannot be undone"

    function confirm(id, goBack) {
      deleteTransaction(id);
      goBack();
      message("Transaction Deleted", "info");
    }

    function cancel(e) {
      message("Transaction not deleted", "info");
    }

    return (
      < div >
        <Card
          title={convertDate(this.props.transactions.dateOfPurchase)}

          style={{ width: 300 }}
        >
          <List dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)} />
          {/* {this.props.transactions} */}
        </Card>
        <Button type="primary" onClick={this.props.goBack()}>Go Back</Button>

        <Popconfirm title={popConformTitle} onConfirm={() => confirm(this.props.transactions._id, this.props.goBack())} onCancel={cancel} okText="Yes" cancelText="No">
          <Button type="danger"> Delete Transaction</Button>
        </Popconfirm>

      </div>
    );
  }
}

export default IndividualTrans;