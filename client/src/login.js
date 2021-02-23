import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import '../styles/main.scss';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
      <div className="form-container">
        <Form dir="rtl" name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish}>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!',},]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="שם משתמש" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="סיסמא"/>
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>זכור אותי</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href=""> שכחתי סיסמא </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">כניסה</Button>
                <a href="">הירשם עכשיו!</a>
            </Form.Item>
        </Form>
      </div>
  );
};

export default Login;