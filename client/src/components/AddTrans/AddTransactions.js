import React, {
    Component
} from 'react';

import {
    DatePicker, Form, Input, Tooltip, Icon, Button, Select, message,  Modal
  } from 'antd';

  import moment from 'moment';

 import {createLabel,  deleteLabel,  getLabels} from '../../couriers'; 

  const { Option } = Select;

const userID = '5c4b9a0d5ab8c65598e4fd29'; //TODO store this information at login

class AddTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: '',
            visible: false
        }
    }

    async componentDidMount() {
        const labels = await getLabels(userID);
        console.log("Labels are :", labels);
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


      /** Modal functions  */
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = async(e) => {
        let a = document.getElementById("NewLabelText");
        let isDuplicateLabel = false;
        let labels = await getLabels(userID);
        for(let i=0; i <labels.length; i++){
          if(labels[i].text === a.value){
            isDuplicateLabel = true;
            break;
          }
        }
        if(isDuplicateLabel){
          message.error('Duplicate label. Label not created');
          this.setState({
            visible: false
          })
        } else {
            await createLabel(a.value)
            labels = await getLabels(userID);
            this.setState({
              visible: false,
              labels: labels
            });
        }       
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      /** End Modal functions */

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

        function onChange(date, dateString) {
            console.log(date, dateString);
          }

        const disableDate =(current) => {
            return current && current > moment().endOf('day');
          }

          const children = [];
          if(this.state.labels){
            this.state.labels.forEach((label)=>{
                children.push(<Option key={label._id}>{label.text}</Option>)
            });
          }
        

          const valueFormatter = e => e.target.value.replace(/\D./, '');
          
          const handleSelectChange = (value) => {
            console.log(value);
            this.props.form.setFieldsValue({
              Labels:  value
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
                    rules: [{ type:"array", required: true, message: 'Please input your purchase label/s' }],
                })(
                    <div>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        onChange={handleSelectChange}
                    >
                    {children}
                    </Select>
                    
                <Button onClick={this.showModal}>Create Label </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    {/* <p>Enter new label name</p> */}
                    <Input id="NewLabelText"></Input>
                    
                </Modal>
 
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
                  // getValueFromEvent: valueFormatter,
                    rules: [{ required: true, 
                      //TODO input validation
                      // type: "regexp", 
                      // pattern: new RegExp("[0-9]*(\.[0-9]{2})?"),
                      // pattern: new RegExp("\d{0,2}(\.\d{1,2})?"),
                      message: 'Please input your purchase cost!' }],
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