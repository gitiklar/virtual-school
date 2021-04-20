import React from 'react';
import { Form, Input, Button, Select } from 'antd'; const { Option } = Select;
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HomeOutlined, WalletOutlined , EditOutlined } from '@ant-design/icons';

const UserDetailsForm = ({data}) => {
    const fields = [];
    Object.keys(data).forEach(key =>key!=='address' && fields.push({name : [key] , value: data[key]}));
    Object.keys(data.address).forEach(key=> fields.push({name : [key] , value: data.address[key]}));
    return (
        <div className="form-container">
            <Form fields={fields} dir="rtl" className="form">
                <Form.Item name="firstName" rules={[{ required: true, message: 'בבקשה הכנס שם פרטי!',},]}>
                    <Input id="firstName" prefix={<UserOutlined/>} placeholder="שם פרטי"/>
                </Form.Item>
                <Form.Item name="lastName" rules={[{ required: true, message: 'בבקשה הכנס שם משפחה!', },]}>
                    <Input id="lastName" prefix={<UserOutlined/>} type="text" placeholder="שם משפחה"/>
                </Form.Item>
                <Form.Item name="userName" rules={[{ required: true, message: 'בבקשה הכנס שם משתמש!', },]}>
                    <Input id="userName" prefix={<UserOutlined/>} type="text" placeholder="שם משתמש"/>
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: 'בבקשה הכנס כתובת מייל!', },{ type: 'email', message: 'מייל לא תקין!',},]}>
                    <Input id="email" prefix={<MailOutlined/>} type="text" placeholder="כתובת מייל"/>
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'בבקשה הכנס סיסמא!', }, { min: 8, message: 'הסיסמא צריכה להיות באורך 8 תווים לפחות!', }]} >
                    <Input id="password" prefix={<LockOutlined/>} type="password" placeholder="סיסמא" value={data.password}/>
                </Form.Item>
                <Form.Item name="phoneNumber" rules={[{ required: true, message: 'בבקשה הכנס מספר טלפון!', },
                                                    { pattern: /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, message: "מספר הטלפון לא תקין" }
                                                    ]}>
                    <Input id="phoneNumber" prefix={<PhoneOutlined/>} type="text" placeholder="טלפון"/>
                </Form.Item>
                <Form.Item name="city" rules={[{ required: true, message: 'בבקשה הכנס עיר!', },]}>
                    <Input id="city" prefix={<GlobalOutlined/>} data-address={true} type="text" placeholder="  עיר"/>
                </Form.Item>
                <Form.Item name="street" rules={[{ required: true, message: 'בבקשה הכנס רחוב !', },]}>
                    <Input id="street" prefix={<HomeOutlined/>} data-address={true} type="text" placeholder="רחוב"/>
                </Form.Item>
                <Form.Item name="houseNumber" rules={[{ required: true, message: 'בבקשה הכנס מספר בית !', },]}>
                    <Input id="houseNumber" prefix={<WalletOutlined/>} data-address={true} type="number" placeholder="מספר בית"/>
                </Form.Item>
                <Form.Item name="role" rules={[{ required: true, message: 'בבקשה בחר תפקיד !', },]}>
                    <Select id="role" placeholder="תפקיד" suffixIcon={<EditOutlined style={{color: '#262626',fontSize: 'medium' , marginRight: '4px'}}/>}>
                        <Option value="מנהל" dir ="rtl">מנהל</Option>
                        <Option value="מורה" dir ="rtl">מורה</Option>
                        <Option value="תלמיד" dir ="rtl">תלמיד</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">שלח</Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="button">אפס טופס</Button>
                </Form.Item>
            </Form>
        </div> 
    );
};

export default UserDetailsForm;
