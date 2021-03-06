import React from 'react';

import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

import { message } from '../../../utils/index';
import { setSessionID, setSessionTrans, setSessionLabels } from '../../../utils/sessions';
import { getAllFromUser, getLabels, signIn } from '../../../couriers'


import './styles.css';

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let res = await signIn(values);
        if (res.data.success) {
          console.log("Login: ", res);
          this.props.toggleSignIn();

          //Store sessions 
          this.storeSession(res.data._id);
        } else {
          message("Username/Password doesn't match", "error")
        }
      }
    });
  }

  storeSession = async (id) => {

    setSessionID(id);

    const allTransaction = await getAllFromUser(id);
    const allLabels = await getLabels();

    setSessionTrans(allTransaction.data);
    setSessionLabels(allLabels);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
          <a className="register-now" onClick={this.props.toggleIsRegister}> register now</a>
        </Form.Item>
      </Form>
    );
  }
}

export const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);