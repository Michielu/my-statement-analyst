import React, {
    Component
  } from 'react';
  
  import {Card, Button, List, Popconfirm, message} from 'antd';

  import {deleteTransaction} from '../../couriers/'
  
  
  class IndividualTrans extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    
    render() {
      let trans =this.props.transactions;
      console.log(this.props.transactions);
      let data= [
        "Cost: "+  trans.cost,
        "Date of Log: " + trans.dateOfLog,
        "Date of Purchase: " + trans.dateOfPurchase,
        "Labels: " + trans.labels,
        "Notes: " + trans.notes
      ]; 

      const popConformTitle = "Are you sure you want to delete transaction? This action cannot be undone"

      function confirm(id, goBack) {
        console.log(id);
        deleteTransaction(id);
        goBack();
        message.success('Click on Yes');
      }
      
      function cancel(e) {
        console.log(e);
        message.error('Click on No');
      }

      return (
      < div >
                <Card
                title={this.props.transactions.dateOfPurchase}
                
                style={{ width: 300 }}
                >
                <List dataSource={data}
                 renderItem={item => (<List.Item>{item}</List.Item>)}/>
                {/* {this.props.transactions} */}
                </Card>
                <Button type="primary" onClick= {this.props.goBack()}>Go Back</Button>

            <Popconfirm title={popConformTitle} onConfirm={()=>confirm(this.props.transactions._id, this.props.goBack())} onCancel={cancel} okText="Yes" cancelText="No">
                <Button type="danger"> Delete Transaction</Button>
            </Popconfirm>

        </div>
      );
    }
  }
  
  export default IndividualTrans;