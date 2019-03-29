import React, {
  Component
} from 'react';

import { Card, Button, Popconfirm } from 'antd';

import { deleteTransaction } from '../../couriers'
import { message, convertDate } from '../../utils'
import { displayLabels } from '../../utils/labelsUtils';


class IndividualTrans extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  displayData = () => {
    let trans = this.props.transactions;
    return (
      <div>
        <b>Cost: </b>
        <p>{trans.cost}</p>
        <b>Date of Log: </b>
        <p>{convertDate(trans.dateOfLog)}</p>
        <b> Date of purchase</b>
        <p>{trans.dateOfPurchase}</p>
        <b>Labels: </b>
        {displayLabels(trans.labels)}
        <br />
        <b>Notes: </b>
        <p>{trans.notes}</p>
      </div>
    )
  }

  render() {

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
          {this.displayData()}
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