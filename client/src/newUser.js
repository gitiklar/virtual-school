import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../styles/main.scss';

const NewUser = () => {

  async function sendForm(e) {
    e.preventDefault();
/*
    let headers = new Headers(); 
    headers.append('Content-Type', 'application/json'); 
    headers.append('Accept', 'application/json'); 
    //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password)); 
    headers.append('Origin','http://localhost:8080'); 

    const response = await fetch('https://localhost:8000/user', {
      method: 'POST',
      headers: headers,
      credentials: 'include',
      body: JSON.stringify({
        //userId: 
        firstName: 'Gita',
        lastName: 'Klar',
        userName: 'GitaKlar',
        email: 'gitiklar@gmail.com',
        password: 'Gitty600',
        phoneNumber: '0548530600',
        address: {
            city: 'Bene-Berak',
            street: 'BaalShemTov',
            houseNumber: '21',
        },
        role: 'student',
     }),
     mode: 'no-cors',
    });

    const body = await response.text();
    console.log(body);
    */
    const response = await fetch('https://localhost:8000', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          },
        mode: 'no-cors',
    });
    debugger
    const data = await response.json();
    debugger
}

  return (
      <div className="form-container">
        <Form action="https://localhost:8000/user" method="POST" dir="rtl" name="normal_login" className="login-form" initialValues={{ remember: true, }}>
            <Form.Item name="firstName" rules={[{ required: true, message: 'בבקשה הכנס שם פרטי!',},]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="שם פרטי" />
            </Form.Item>
            <Form.Item name="lastName" rules={[{ required: true, message: 'בבקשה הכנס שם משפחה!', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="שם משפחה"/>
            </Form.Item>
            <Form.Item name="userName" rules={[{ required: true, message: 'בבקשה הכנס שם משתמש!', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="שם משתמש"/>
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: 'בבקשה הכנס כתובת מייל!', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="כתובת מייל"/>
            </Form.Item>
            <Form.Item name="phoneNumber" rules={[{ required: true, message: 'בבקשה הכנס מספר טלפון!', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="טלפון"/>
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'בבקשה הכנס סיסמא!', },]} >
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="סיסמא"/>
            </Form.Item>
            <Form.Item name="city" rules={[{ required: true, message: 'בבקשה הכנס עיר!', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="עיר"/>
            </Form.Item>
            <Form.Item name="street" rules={[{ required: true, message: 'בבקשה הכנס רחוב !', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="רחוב"/>
            </Form.Item>
            <Form.Item name="houseNumber" rules={[{ required: true, message: 'בבקשה הכנס מספר בית !', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="number" placeholder="מספר בית"/>
            </Form.Item>
            <Form.Item name="role" rules={[{ required: true, message: 'בבקשה הכנס תפקיד !', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="תפקיד"/>
            </Form.Item>
            <Form.Item name="submit">
                <Button type="primary" htmlType="submit" onClick={sendForm}>שלח</Button>
            </Form.Item>
        </Form>
      </div>
  );
};

export default NewUser;