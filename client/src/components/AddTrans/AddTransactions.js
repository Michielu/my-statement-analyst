import React, {
    Component
} from 'react';

import {
    Form, Input, Tooltip, Icon, Button, Select
  } from 'antd';
  
  const { Option } = Select;


class AddTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }

    render() {
        // let trans = this.props.transactions;
        // console.log(this.props.transactions);
        // let data = [
        //     "Cost: " + trans.cost,
        //     "Date of Log: " + trans.dateOfLog,
        //     "Date of Purchase: " + trans.dateOfPurchase,
        //     "Labels: " + trans.labels,
        //     "Notes: " + trans.notes
        // ];


        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 8,
            },
        },
        };


        //Cost
        //Date of purchase
        //Labels
        //notes

        // add users 
        // add date of log
        return ( 
            <Form onSubmit={this.handleSubmit}>
                <Form.Item
                 {...formItemLayout}
                    label={(
                        <span>
                        Date of Purchase
                        </span>
                    )}
                >
                {getFieldDecorator('Date of Purchase')(
                    <Input style={{ width: '100%' }} />
                )}
                </Form.Item>
                <Form.Item
                 {...formItemLayout}
                    label={(
                        <span>
                        Labels
                        </span>
                    )}
                >
                {getFieldDecorator('Labels', {
                    rules: [{ required: true, message: 'Please input your purchase label/s' }],
                })(
                    <Input style={{ width: '100%' }} />
                )}
                </Form.Item>
                <Form.Item
                 {...formItemLayout}
                    label={(
                        <span>
                       Cost
                        </span>
                    )}
                >
                {getFieldDecorator('cost', {
                    rules: [{ required: true, message: 'Please input your purchase cost!' }],
                })(
                    <Input style={{ width: '100%' }} />
                )}
                </Form.Item>
                <Form.Item
                 {...formItemLayout}
                    label={(
                        <span>
                            Notes
                        </span>
                    )}
                >
                {getFieldDecorator('notes')(
                    <Input style={{ width: '100%' }} />
                )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">Add</Button>
                {/** Create a delete button*/}
                </Form.Item>
            </Form>
        );
    }
}

const WrappedAddTransactions = Form.create({ name: 'register' })(AddTransactions);


export default WrappedAddTransactions;