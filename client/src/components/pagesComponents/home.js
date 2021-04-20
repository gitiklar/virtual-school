import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Layout , Button , message } from 'antd'; const { Header, Sider, Content } = Layout;
import 'antd/dist/antd.css';
import UserDetailsComponent from '../userComponents/userDetailsComponent';
import AddNewUserComponent from '../userComponents/addNewUserComponent';

const Home = () => {
    const indicationMessage = useSelector(state => state.userReducer.indicationMessage);   
    const role = useSelector(state => state.userReducer.loggedInUserFormData.role);
    if(!role) return <Redirect to="/"/>;
    useEffect(() => message.destroy(indicationMessage.key) ,[]);  

    return (
        <Layout>
            <Header>
                <Button danger>התנתק</Button>
                {role} שלום
                <UserDetailsComponent/>
            </Header>
            <Layout>
                <Content>

                </Content>
                <Sider>
                    { role === 'מנהל' && (
                        <>
                            <Button type="primary">רשימת משתמשים</Button>
                            <AddNewUserComponent/>
                        </>
                    )}
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