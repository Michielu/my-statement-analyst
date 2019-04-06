import React from 'react';
import moment from 'moment';
import { Button, Checkbox, Input } from 'antd';

import TransRange from './TransRange/index.js';
import Labels from './Labels';
import FilteredTrans from './FilteredTrans'

import { toTimestamp, TableFormat } from '../../utils'


const MIN = 0;
const MAX = 120000000;

export default class Filter extends React.Component {
    state = {
        rangeStart: null,
        rangeEnd: null,
        selectedLabels: [],
        costMin: null,
        costMax: null,
        allLabels: false,
        showTrans: false
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
        this.setState((prev) => {
            return {
                showTrans: !prev.showTrans
            }
        })
    }

    handleSelectedLabelChange = (tag, checked) => {
        const { selectedLabels } = this.state;
        const nextSelectedLabels = checked
            ? [...selectedLabels, tag]
            : selectedLabels.filter(t => t !== tag);
        this.setState({ selectedLabels: nextSelectedLabels });
    }

    onCheckboxChange = (e) => {
        this.setState((prevState) => {
            return {
                allLabels: !prevState.allLabels
            }
        })
    }

    onMinChange = (e) => {
        const { value } = e.target;
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.setState({ costMin: value });
        }
    }

    onMaxChange = (e) => {
        const { value } = e.target;
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.setState({ costMax: value });
        }
    }

    render() {
        if (this.state.showTrans) {
            return (
                <FilteredTrans {...this.state} />
            )
        } else {
            return (
                <div>
                    <h2>Filter Transactions Page: </h2>
                    <div>
                        <TransRange updateRange={this.updateRange} />
                    </div>
                    <div>
                        <Labels handleChange={this.handleSelectedLabelChange} selectedLabels={this.state.selectedLabels} />
                        <Checkbox onChange={this.onCheckboxChange}> Match all labels </Checkbox>
                    </div>
                    <div>
                        <Input style={{ width: 120 }} placeholder="Min amount" value={this.state.costMin} onChange={this.onMinChange} />
                        <Input style={{ width: 120 }} placeholder="Max amount" value={this.state.costMax} onChange={this.onMaxChange} />
                    </div>
                    <div>

                        <Button onClick={this.onFilter}>Filter Transactions</Button>
                    </div>
                </div>
            )
        }

    }
}
