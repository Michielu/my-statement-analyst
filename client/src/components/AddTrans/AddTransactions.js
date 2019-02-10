import React, {
    Component
} from 'react';

import {
    DatePicker, Form, Input, Tooltip, Icon, Button, Select, Modal
  } from 'antd';

  import moment from 'moment';

 import {createLabel,  deleteLabel,  getLabels} from '../../couriers'; 

  const { Option } = Select;

const userID = '5c4b9a0d5ab8c65598e4fd29'; //TODO store this information at login

class AddTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ''
        }
        
       
    }

    async componentDidMount() {
        const labels = await getLabels(userID);
        console.log("Labels are :", labels)
        this.setState(() => {
          return { labels: labels };
        });
      }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
              values.DateOfPurchase = values.DateOfPurchase.format();
            console.log('Received values of form: ', values);
          }
        });
      }

    render() {
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

        function onChange(date, dateString) {
            console.log(date, dateString);
          }

        const disableDate =(current) => {
            return current && current > moment().endOf('day');
          }

          function handleSelectChange(value) {
            console.log(`selected ${value}`);
          }

          const children = [];
        //   console.log("labels: ", this.state.labels);
          if(this.state.labels){
            this.state.labels.forEach((label)=>{
                children.push(<Option key={label._id}>{label.text}</Option>)
            });
          }
        
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
                {getFieldDecorator('DateOfPurchase', {
                    initialValue: moment(),
                    rules: [{required: true}]
                })(
                    <DatePicker  disabledDate={disableDate} onChange={onChange}/>
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
                    <div>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        // defaultValue={['a10', 'c12']}
                        onChange={handleSelectChange}
                    >
                    {children}
                    </Select>
                    
                <Button onClick={()=>console.log("create label")}>Create Label {/* TODO use Modal*/ }</Button>
                    </div>
                    
                    // <Input style={{ width: '100%' }} />
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
                {getFieldDecorator('Cost', {
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
                {getFieldDecorator('Notes')(
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