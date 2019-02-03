import React, {
    Component
  } from 'react';
  
  import {Card, Table} from 'antd';

  
  
  class IndividualTrans extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
  

  
    render() {
      let dataSource = [];
      dataSource.push(this.props.transactions);
      
  
      const columns = [{
        title: 'Notes',
        dataIndex: 'notes',
        key: 'notes',
      }, {
        title: 'Labels',
        dataIndex: 'labels',
        key: 'labels',
      }, {
        title: 'DateOfPurchase',
        dataIndex: 'dateOfPurchase',
        key: 'dateOfPurchase',
      }, {
        title: 'DateOfLog',
        dataIndex: 'dateOfLog',
        key: 'dateOfLog',
      }, {
        title: 'Cost',
        dataIndex: 'cost',
        key: 'cost',
      }];
  
      return (< div >
                <Card
                title={this.props.dateOfPurchase}
                
                style={{ width: 300 }}
                >
                {/* <Table  dataSource={dataSource} columns={columns} /> */}

                </Card>
            <button onClick= {this.props.goBack()}>Go back</button>
        </div>
      );
    }
  }
  
  export default IndividualTrans;