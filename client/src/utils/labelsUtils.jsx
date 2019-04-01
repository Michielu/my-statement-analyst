import React from 'react';

import { Tag } from 'antd';

import { getSessionLabels } from '../utils/sessions';

const CheckableTag = Tag.CheckableTag;

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

export const checkableLabels = (keys, handleChange, selectedLabels) => {
    const labels = getSessionLabels();

    if (keys) {
        return (
            <div>
                {keys.map(tag => {
                    const labelTitle = findLabelKey(tag, labels);
                    return (
                        <CheckableTag
                            key={tag}
                            checked={selectedLabels.indexOf(tag) > -1}
                            onChange={checked => handleChange(tag, checked)}
                        >
                            {labelTitle.text}
                        </CheckableTag>
                    )
                })}
            </div>
        )
    } else {
        return (
            <span>
                <p>No Label</p>
            </span>
        )
    }
}