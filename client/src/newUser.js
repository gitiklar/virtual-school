import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../styles/main.scss';

const NewUser = () => {
  async function sendForm(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },      credentials: 'include',
      body: JSON.stringify({
        //userId: 
        firstName: 'Gita',
        lastName: 'Madar',
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
     mode: 'cors',
    });
    const body = await response.json();
    console.log(body);
}

    async function onFinish(obj) {
        console.log(obj);
        const response = await fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
        mode: 'cors',
        });
        const body = await response.json();
        console.log(body);
    }

    function onFinishFailed(values) {
        console.log(values);
    }
  return (
      <div className="form-container">
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} action="http://localhost:8000/user" method="POST" dir="rtl" name="normal_login" className="login-form" initialValues={{ remember: true, }}>
            <Form.Item name="firstName" rules={[{ required: true, message: 'בבקשה הכנס שם פרטי!',},]}>
                <Input name="firstName" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="שם פרטי" />
            </Form.Item>
            <Form.Item name="lastName" rules={[{ required: true, message: 'בבקשה הכנס שם משפחה!', },]}>
                <Input name="lastName" prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="שם משפחה"/>
            </Form.Item>
            <Form.Item name="userName" rules={[{ required: true, message: 'בבקשה הכנס שם משתמש!', },]}>
                <Input name="userName" prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="שם משתמש"/>
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: 'בבקשה הכנס כתובת מייל!', },]}>
                <Input name="email" prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="כתובת מייל"/>
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'בבקשה הכנס סיסמא!', },]} >
                <Input name="password" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="סיסמא"/>
            </Form.Item>
            <Form.Item name="phoneNumber" rules={[{ required: true, message: 'בבקשה הכנס מספר טלפון!', },]}>
                <Input name="phoneNumber" prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="טלפון"/>
            </Form.Item>
            {/* <Form.Item name="city" rules={[{ required: true, message: 'בבקשה הכנס עיר!', },]}>
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
            </Form.Item> */}
            <Form.Item>
                <Button type="primary" htmlType="submit" >שלח</Button>
            </Form.Item>
        </Form>
      </div>
  );
};

export default NewUser;