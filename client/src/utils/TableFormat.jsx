import React, {
    Component
} from 'react';

import { Table, Tag } from 'antd';

import {
    convertDate
} from './dates'

export class TableFormat extends Component {
    findLabelKey = (key) => {
        const lab = this.props.labels;
        for (let i = 0; i < lab.length; i++) {
            if (lab[i]["_id"] == key) {
                return lab[i];
            }
        }
    }

    render() {
        let dataSource = [];
        this.props.transactions.forEach((trans) => {
            trans.key = trans._id
            dataSource.push(trans);
        });

        const columns = [{
            title: 'Notes',
            dataIndex: 'notes',
            key: 'notes',
        }, {
            title: 'Labels',
            dataIndex: 'labels',
            key: 'labels',
            render: (labels) => {
                if (labels) {
                    return (
                        <span>
                            {
                                labels.map(tag => {
                                    const labelTitle = this.findLabelKey(tag);
                                    return <Tag color={'blue'} key={tag}>{labelTitle.text} </Tag>;
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
        }, {
            title: 'DateOfPurchase',
            dataIndex: 'dateOfPurchase',
            key: 'dateOfPurchase',
            render: (dop) => {
                return (
                    <span>
                        <p>{convertDate(dop)}</p>
                    </span>
                )
            }
        }, {
            title: 'DateOfLog',
            dataIndex: 'dateOfLog',
            key: 'dateOfLog',
            render: (dol) => {
                return (
                    <span>
                        <p>{convertDate(dol)}</p>
                    </span>
                )
            }
        }, {
            title: 'Cost',
            dataIndex: 'cost',
            key: 'cost',
        }];

        return (< div >
            <h2>Transactions are: </h2>
            <Table onRow={(record) => {
                return {
                    onClick: () => {
                        this.props.toggleAllTrans(record)
                    },       // click row

                };
            }}
                dataSource={dataSource} columns={columns} />
        </div>
        );
    }
}
