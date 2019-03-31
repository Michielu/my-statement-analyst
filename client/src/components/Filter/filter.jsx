import React from 'react';
import moment from 'moment';
import { Button } from 'antd';

import TransRange from './TransRange/index.js';

import {
    getSessionLabels,
    getSessionTrans
} from '../../utils/sessions';
import { toTimestamp, TableFormat } from '../../utils'


const MIN = 0;
const MAX = 120000000;

export default class Filter extends React.Component {
    state = {
        rangeStart: moment(),
        rangeEnd: moment(),
        labels: [],
        costMin: MIN,
        costMax: MAX,
        allLabels: true,


    }

    updateRange = (startR, endR) => {
        this.setState(() => {
            return {
                rangeStart: startR,
                rangeEnd: endR
            }
        })
    }

    onFilter = () => {
        console.log("State: ", this.state)
        console.log("Start: ", toTimestamp(this.state.rangeStart), " End: ", toTimestamp(this.state.rangeEnd));
    }

    render() {
        return (
            <div>
                <h2>Filter Transactions Page: </h2>
                <TransRange updateRange={this.updateRange} />
                <Button onClick={this.onFilter}>Filter Transactions</Button>
            </div>
        )
    }
}
