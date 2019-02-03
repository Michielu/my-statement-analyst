import React, {
    Component
  } from 'react';
  
  import {Card, List} from 'antd';

  
  
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

  
      return (< div >
                <Card
                title={this.props.transactions.dateOfPurchase}
                
                style={{ width: 300 }}
                >
                <List dataSource={data}
                 renderItem={item => (<List.Item>{item}</List.Item>)}/>
                {/* {this.props.transactions} */}
                </Card>
            <button onClick= {this.props.goBack()}>Go back</button>
        </div>
      );
    }
  }
  
  export default IndividualTrans;