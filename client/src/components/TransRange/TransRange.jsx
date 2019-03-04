import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;


export default class TransRange extends React.Component {
    state = {
        start: moment(),
        end: moment()
    }

    onChange(date, dateString) {
        console.log(date, dateString);
    }
    render() {
        return (
            <RangePicker onChange={this.onChange} />
        )
    }

}
