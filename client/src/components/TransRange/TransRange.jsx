import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

import {
    getAll,
    getLabels,
} from '../../couriers/index'

import { toTimestamp, TableFormat } from '../../utils'

const { RangePicker } = DatePicker;


export default class TransRange extends React.Component {
    state = {
        start: moment(),
        end: moment(),
        selected: false,
        transactions: [],
        labels: [],
        filteredTrans: []
    }

    onDateSelect = async () => {
        const allTransaction = await getAll();
        const allLabels = await getLabels();
        this.setState({
            transactions: allTransaction.data,
            labels: allLabels
        });
        this.filterDates()
    }

    onChange = (date, dateString) => {
        this.setState({
            start: toTimestamp(dateString[0]),
            end: toTimestamp(dateString[1]),
            selected: true
        })
        this.onDateSelect();
    }

    filterDates = () => {
        let filteredTrans = [];
        //TODO: Use Array.filter 
        this.state.transactions.forEach((trans, i) => {
            let d = trans.dateOfPurchase;
            let ts = toTimestamp(d);
            if (ts > this.state.start && ts < this.state.end) {
                filteredTrans.push(trans);
            }

        })
        this.setState({
            filteredTrans
        })
        console.log("After filter :", this.state.filteredTrans);
    }
    render() {
        if (this.state.selected) {
            return (
                <div>
                    <RangePicker onChange={this.onChange} />
                    <TableFormat transactions={this.state.filteredTrans} labels={this.state.labels} toggleAllTrans={() => { console.log("Hi") }} />
                </div>
            )
        } else {
            return (
                <div>
                    <RangePicker onChange={this.onChange} />
                </div>
            )
        }
    }
}
