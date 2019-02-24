import React from 'react';

import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
  
 import './styles.css'; 

  class Register extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
       
        if (!err) {
          console.log('Received values of form: ', values, this.props);
          if(values.password !== values.password2){
            console.log("Passords are not the same"); //TODO find a way to displays this
            } else {
                //Go to login page
                this.props.toggleIsRegister();
            }
          // TODO do some verification/clear session/etc etc
        //   this.props.toggleSignIn();
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="register-form">
          <Form.Item>
            {getFieldDecorator('userName', {
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
            {getFieldDecorator('password2', {
              rules: [{ required: true, message: 'Please retype your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Register
            </Button>
             <a className="login-now" href=""> Log in</a>
          </Form.Item>
        </Form>
      );
    }
  }
  
  export  const RegisterForm = Form.create({ name: 'register'})(Register);