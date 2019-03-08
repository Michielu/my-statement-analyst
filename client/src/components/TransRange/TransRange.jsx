import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;


export default class TransRange extends React.Component {
    state = {
        start: moment(),
        end: moment(),
        selected: false
    }

    onChange = (date, dateString) => {
        this.setState({
            start: dateString[0],
            end: dateString[1],
            selected: true
        })
        console.log(date, dateString);
    }
    render() {

        if (this.state.selected) {
            return (
                <div>
                    <RangePicker onChange={this.onChange} />
                    <h2> Dates selected: </h2>
                    <p>{this.state.start}</p><p> {this.state.end}</p>
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
