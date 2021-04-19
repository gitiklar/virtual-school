import React, { useEffect , useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import { Layout , Button , Modal , message , Form , Input, Select} from 'antd'; const { Option } = Select;
import 'antd/dist/antd.css';
import { EditOutlined, GlobalOutlined, HomeOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

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
}

const UserDetails = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const loggedInUserFormData = useSelector(state => state.userReducer.loggedInUserFormData);
    const history = useHistory();
    const routeToHome = () => history.push("/home");
    const routeToUserDetails = () => history.push("/home/userDetails");

    useEffect(() => {
        history.location.pathname === "/home" && setIsModalVisible(false);
        history.location.pathname === "/home/userDetails" && setIsModalVisible(true);
      }, [history.location.pathname]);

    return (
        <>
            <Button type="danger" onClick={routeToUserDetails}>פרטי משתמש</Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={routeToHome} onCancel={routeToHome}>
                <UserDetailsForm data={loggedInUserFormData}/>   
            </Modal>
        </>
    );
}

const MyHeader = () => {
    const role = useSelector(state => state.userReducer.loggedInUserFormData.role);   
   
    return(
        <Header>
                <Button danger>התנתק</Button>
                {role} שלום
                <UserDetails/>
        </Header>
    );
    
}

const Home = () => {
    const indicationMessage = useSelector(state => state.userReducer.indicationMessage);   
    const role = useSelector(state => state.userReducer.loggedInUserFormData.role);
    if(!role) return <Redirect to="/"/>;
    useEffect(() => message.destroy(indicationMessage.key) ,[]);  

    return (
        <Layout>
            <MyHeader/>
            <Layout>
                <Content>

                </Content>
                <Sider>
                    { role === 'מנהל' && <Button type="danger">רשימת משתמשים</Button> }
                </Sider>
            </Layout>
        </Layout>
    );
}
export default Home;










/*
header
לוגו
שלום ל.
כפתור התנתק לדף האנטרי
הצג פרטי משתמש -> עדכון פרטים לא כולל תפקיד

menu
:למנהל
הצג פרטי משתמשים כולל אפשרות לעדכן תפקיד


:למורה
הצג פרטי משתמשים
מערכת לפי מורה - לחיצה על כל שיעור מאפשרת להכניס לינק לשיעור
כניסה לכיתה לפי מקצוע וכיתה ותאריך, העלאת חומר של השיעורים שהתקיימו

:לתלמיד
צפיה בחומר השיעור לפי המקצוע והכיתה והקבצה כולל תאריך של כל שיעור
כניסה למערכת שעות של היום הנוכחי ולחיצה על שיעור יפתח את הקישור שהמורה הכניס

(צאט מורה כיתה)
*/