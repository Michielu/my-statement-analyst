import React from 'react';

import { Tag } from 'antd';

import { getSessionLabels } from '../utils/sessions';


const findLabelKey = (key, lab) => {
    for (let i = 0; i < lab.length; i++) {
        if (lab[i]["_id"] == key) {
            return lab[i];
        }
    }
}

export const displayLabels = (keys) => {
    const labels = getSessionLabels();

    const onPressTag = () => {
        console.log("Pressed : tag")
    }

    if (keys) {
        return (
            <span>
                {
                    keys.map(tag => {
                        const labelTitle = findLabelKey(tag, labels);
                        return <Tag color={'blue'} key={tag} onClick={onPressTag}>{labelTitle.text} </Tag>;
                    })
                }
            </span>
        )
    } else {
        return (
            <span>
                <p>No Label</p>
            </span>
        )
    }

}