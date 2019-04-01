import React from 'react';
import moment from 'moment';
import { Button } from 'antd';

import TransRange from './TransRange/index.js';
import Labels from './Labels';

import { toTimestamp, TableFormat } from '../../utils'


const MIN = 0;
const MAX = 120000000;

export default class Filter extends React.Component {
    state = {
        rangeStart: moment(),
        rangeEnd: moment(),
        selectedLabels: [],
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

    handleChange = (tag, checked) => {
        const { selectedLabels } = this.state;
        const nextSelectedLabels = checked
          ? [...selectedLabels, tag]
          : selectedLabels.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedLabels);
        this.setState({ selectedLabels: nextSelectedLabels });
      }

    render() {
        return (
            <div>
                <h2>Filter Transactions Page: </h2>
                <TransRange updateRange={this.updateRange} />

                <Labels handleChange={this.handleChange} selectedLabels ={this.state.selectedLabels}/>
                <Button onClick={this.onFilter}>Filter Transactions</Button>
            </div>
        )
    }
}
