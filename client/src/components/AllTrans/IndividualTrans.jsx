import React, {
  Component
} from 'react';

import { Card, Button, List, Popconfirm, Tag } from 'antd';

import { deleteTransaction } from '../../couriers'
import { message, convertDate } from '../../utils'

import { getSessionTrans, getSessionLabels } from '../../utils/sessions';

class IndividualTrans extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  findLabelKey = (key, lab) => {
    for (let i = 0; i < lab.length; i++) {
      if (lab[i]["_id"] == key) {
        return lab[i];
      }
    }
  }

  displayLabels = (keys, labels) => {
    return (
      <span>
        {
          keys.map(tag => {
            const labelTitle = this.findLabelKey(tag, labels);
            return <Tag color={'blue'} key={tag}>{labelTitle.text} </Tag>;
          })
        }
      </span>
    )
  }

  displayData = () => {
    let trans = this.props.transactions;
    const labels = getSessionLabels();

    return (
      <div>
        <b>Cost: </b>
        <p>{trans.cost}</p>
        <b>Date of Log: </b>
        <p>{convertDate(trans.dateOfLog)}</p>
        <b> Date of purchase</b>
        <p>{trans.dateOfPurchase}</p>
        <b>Labels: </b>
        {this.displayLabels(trans.labels, labels)}
        <br />
        <b>Notes: </b>
        <p>{trans.notes}</p>
      </div>
    )
  }

  render() {
    // let data = [
    //   "Cost: " + trans.cost,
    //   "Date of Log: " + convertDate(trans.dateOfLog),
    //   "Date of Purchase: " + convertDate(trans.dateOfPurchase),
    //   "Labels: " + this.displayLabels(trans.labels, labels),
    //   "Notes: " + trans.notes
    // ];

    const popConformTitle = "Are you sure you want to delete transaction? This action cannot be undone"

    function confirm(id, goBack) {
      deleteTransaction(id);
      goBack();
      message("Transaction Deleted", "info");
    }

    function cancel(e) {
      message("Transaction not deleted", "info");
    }


    // const displayData = (data) => {
    //   return (
    //     <div>
    //       <b>Cost</b>
    //       <p>a{data.cost}</p>
    //       <b> Date of purchase</b>
    //       <p>{data.dateOfPurchase}</p>
    //     </div>
    //   )
    // }

    return (
      < div >
        <Card
          title={convertDate(this.props.transactions.dateOfPurchase)}

          style={{ width: 300 }}
        >
          {this.displayData()}
          {/* <List dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)} /> */}
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