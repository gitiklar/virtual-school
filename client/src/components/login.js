import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import { login, saveLoginFormInput } from '../redux/actions';

const Login = () => {
  const loginFormData = useSelector(state => state.userReducer.loginFormData);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = () => {
    dispatch(login(history));
  };

  function onInputHandler(target) {
    const newLoginFormData = JSON.parse(JSON.stringify(loginFormData));
    newLoginFormData[target.id] = target.value;
    dispatch(saveLoginFormInput(newLoginFormData));
  }

  const fields = [{name: ['userName'] , value: loginFormData.userName} , {name: ['password'] , value: loginFormData.password}];
  return (
      <div className="form-container">
        <Form fields={fields} onInput={(e)=>onInputHandler(e.target)} dir="rtl" name="normal_login" className="form" onFinish={onLogin}>
            <Form.Item name="userName" rules={[{ required: true, message: 'בבקשה הכנס שם משתמש!',},]}>
                <Input id="userName" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="שם משתמש" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'בבקשה הכנס סיסמא!', },]}>
                <Input id="password" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="סיסמא"/>
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>זכור אותי</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href=""> שכחתי סיסמא </a>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">כניסה</Button>
                <a href="">הירשם עכשיו!</a>
            </Form.Item>
        </Form>
      </div>
  );
};

export default Login;