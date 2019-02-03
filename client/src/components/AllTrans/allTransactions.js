import React, {
    Component
  } from 'react';
  
  import {Card, Table} from 'antd';

  import {
    getAll,
  } from '../../couriers/index'
  
  
  class AllTransactions extends Component {
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
        let dataSource = [];
        this.state.transactions.forEach((trans)=>{ 
          trans.key = trans._id
          dataSource.push(trans);
        });
    
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
      <h2>Transactions are: </h2>
                <Table  onRow={(record) => {
                  return {
                    onClick: () => {this.props.toggleAllTrans(record)},       // click row

                  };
                }}
                dataSource={dataSource} columns={columns} />
      
        </div>
      );
    }
  }
  
  export default AllTransactions;