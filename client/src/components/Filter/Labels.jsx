import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

import {
    getSessionLabels,
    getSessionTrans
} from '../../utils/sessions';

import { displayLabels } from '../../utils/labelsUtils';
import { getLabels } from '../../couriers';


export default class Labels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: [],
            allLabels: [],
        }

        this.getLabels();
    }


    getLabels = async () => {
        const allLabels = await getSessionLabels();
        const keys = allLabels.map((labelObj) => {
            return labelObj['_id'];
        })
        this.setState(() => {
            return {
                allLabels: keys

            }
        })
    }




    onChange = (date, dateString) => {

        this.props.updateRange(dateString[0], dateString[1]);
    }


    render() {
        return (
            <div>
                <h4>Labels</h4>
                {console.log("this.state.allLabels: ", this.state.allLabels)}
                {displayLabels(this.state.allLabels)}
            </div>
        )

    }
}
