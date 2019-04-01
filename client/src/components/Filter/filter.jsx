import React from 'react';
import moment from 'moment';
import { Button, Checkbox } from 'antd';

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
        allLabels: false,
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

    handleSelectedLabelChange = (tag, checked) => {
        const { selectedLabels } = this.state;
        const nextSelectedLabels = checked
          ? [...selectedLabels, tag]
          : selectedLabels.filter(t => t !== tag);
        this.setState({ selectedLabels: nextSelectedLabels });
      }

      onCheckboxChange= (e)=>{
        this.setState((prevState)=>{
            return{
                allLabels: !prevState.allLabels
            }
        })
      }

    render() {
        return (
            <div>
                <h2>Filter Transactions Page: </h2>
                <div>
                    <TransRange updateRange={this.updateRange} />
                </div> 
                <div>
                    <Labels handleChange={this.handleSelectedLabelChange} selectedLabels ={this.state.selectedLabels}/>
                    <Checkbox onChange={this.onCheckboxChange}> Match all labels </Checkbox>
                </div>
                <div>
                    <Button onClick={this.onFilter}>Filter Transactions</Button>
                </div>
            </div>
        )
    }
}
