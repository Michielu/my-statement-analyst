import React, {
  Component
} from 'react';

import {
  DatePicker, Form, Input, Button, Select, message, Modal
} from 'antd';

import moment from 'moment';

import { createLabel, getLabels, postTransaction } from '../../couriers';
import { getSessionID, getSessionLabels, setSessionLabels } from '../../utils/sessions';

const { Option } = Select;

const userID = getSessionID();

class AddTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: '',
      visible: false
    }
  }

  async componentDidMount() {
    const labels = getSessionLabels();
    this.setState(() => {
      return { labels: labels };
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.DateOfPurchase = values.DateOfPurchase.format();
        postTransaction(values);
      }
    });
  }


  /** Modal functions  */
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = async (e) => {
    let a = document.getElementById("NewLabelText");
    let isDuplicateLabel = false;
    let labels = getSessionLabels();
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].text === a.value) {
        isDuplicateLabel = true;
        break;
      }
    }
    if (isDuplicateLabel) {
      message.error('Duplicate label. Label not created');
      this.setState({
        visible: false
      })
    } else {
      await createLabel(a.value)
      const newLabels = await getLabels(userID);
      setSessionLabels(newLabels);
      this.setState({
        visible: false,
        labels: newLabels
      });
    }
  }

  handleCancel = (e) => {
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

    const disableDate = (current) => {
      return current && current > moment().endOf('day');
    }

    const children = [];
    if (this.state.labels) {
      this.state.labels.forEach((label) => {
        children.push(<Option key={label._id}>{label.text}</Option>)
      });
    }

    const handleSelectChange = (value) => {
      this.props.form.setFieldsValue({
        Labels: value
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
            rules: [{ required: true }]
          })(
            <DatePicker disabledDate={disableDate} onChange={onChange} />
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
            rules: [{ type: "array", required: true, message: 'Please input your purchase label/s' }],
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
            rules: [{
              required: true,
              pattern: new RegExp("^[0-9]*(\.[0-9]{1,2})?$"),
              message: 'Please input your purchase cost. Whole number or up to two decimal allowed'
            }],
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