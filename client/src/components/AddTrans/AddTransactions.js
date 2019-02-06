import React, {
    Component
} from 'react';

import {
    Card,
    Button,
    List,
    Popconfirm,
    message
} from 'antd';

import {
    deleteTransaction
} from '../../couriers/'


class AddTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        // let trans = this.props.transactions;
        // console.log(this.props.transactions);
        // let data = [
        //     "Cost: " + trans.cost,
        //     "Date of Log: " + trans.dateOfLog,
        //     "Date of Purchase: " + trans.dateOfPurchase,
        //     "Labels: " + trans.labels,
        //     "Notes: " + trans.notes
        // ];

       

        return ( 
            <div >
                <p>Add Transactions</p>

            </div>
        );
    }
}

export default AddTransactions;