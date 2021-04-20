import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import { login, saveLoginFormInput } from '../../redux/actions';

const Login = () => {
  const loginFormData = useSelector(state => state.userReducer.loginFormData);
  const indicationMessage = useSelector(state => state.userReducer.indicationMessage);   
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=> {
    if(!indicationMessage.message) return;
    indicationMessage.type === 'error' && message.error({ content: indicationMessage.message, key:indicationMessage.key, duration: 3 });
} , [indicationMessage.message]);

  const onLogin = () => {
    message.loading({ content: 'בבדיקה', key:indicationMessage.key });
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
            </Form.Item>
        </Form>
      </div>
  );
};

export default Login;