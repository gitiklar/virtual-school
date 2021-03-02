import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../styles/main.scss';

const AddNewUser = () => {
    async function onFinish(obj) {
        const address = { city: obj.city , street: obj.street , houseNumber: obj.houseNumber};
        delete (obj.city); delete (obj.street); delete (obj.houseNumber);
        const objWithAddress = {...obj , address};
        const response = await fetch('http://localhost:9000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objWithAddress),
            mode: 'cors',
            });
        const body = await response.json();
        console.log(objWithAddress);

    }

    function onFinishFailed(values) {
        console.log(values);
    }
  return (
      <div className="form-container">
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} dir="rtl" name="normal_login" className="login-form" initialValues={{ remember: true, }}>
            <Form.Item name="firstName" rules={[{ required: true, message: 'בבקשה הכנס שם פרטי!',},]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="  שם פרטי" />
            </Form.Item>
            <Form.Item name="lastName" rules={[{ required: true, message: 'בבקשה הכנס שם משפחה!', },]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} type="text" placeholder="  שם משפחה"/>
            </Form.Item>
            <Form.Item name="userName" rules={[{ required: true, message: 'בבקשה הכנס שם משתמש!', },]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} type="text" placeholder="  שם משתמש"/>
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: 'בבקשה הכנס כתובת מייל!', },]}>
                <Input prefix={<MailOutlined className="site-form-item-icon" />} type="text" placeholder="  כתובת מייל"/>
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'בבקשה הכנס סיסמא!', },]} >
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="  סיסמא"/>
            </Form.Item>
            <Form.Item name="phoneNumber" rules={[{ required: true, message: 'בבקשה הכנס מספר טלפון!', },]}>
                <Input prefix={<PhoneOutlined className="site-form-item-icon" />} type="text" placeholder="  טלפון"/>
            </Form.Item>
             <Form.Item name="city" rules={[{ required: true, message: 'בבקשה הכנס עיר!', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="  עיר"/>
            </Form.Item>
            <Form.Item name="street" rules={[{ required: true, message: 'בבקשה הכנס רחוב !', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="  רחוב"/>
            </Form.Item>
            <Form.Item name="houseNumber" rules={[{ required: true, message: 'בבקשה הכנס מספר בית !', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="number" placeholder="  מספר בית"/>
            </Form.Item>
            <Form.Item name="role" rules={[{ required: true, message: 'בבקשה הכנס תפקיד !', },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="text" placeholder="  תפקיד"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" >שלח</Button>
            </Form.Item>
        </Form>
      </div>
  );
};

export default AddNewUser;