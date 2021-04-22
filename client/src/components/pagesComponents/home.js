import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Button , message } from 'antd';
import 'antd/dist/antd.css';
import UserDetailsComponent from '../userComponents/userDetailsComponent';
import AddNewUserComponent from '../userComponents/addNewUserComponent';
import { Link } from 'react-router-dom';

const Home = () => {
    const indicationMessage = useSelector(state => state.userReducer.indicationMessage);   
    const role = useSelector(state => state.userReducer.loggedInUserFormData.role);
    if(!role) return <Redirect to="/"/>;
    useEffect(() => message.destroy(indicationMessage.key) ,[]);  

    return (
        <div className="homeContainer">
			<header id="header">
                 <img src="../../styles/images/logo.png"></img>
                 <div className="divHello">
                    <Link to="/"><u>התנתק</u>&nbsp;&nbsp;&nbsp;</Link>
                    <span> שלום {role} &nbsp; &nbsp;</span>
                 </div>
			</header>
			<div id="heading" >
                <div className="lineMenu">
                    { role === 'מנהל' && (
                                <>
                                    <AddNewUserComponent/>
                                    <Button type="primary">רשימת משתמשים</Button>
                                </>
                    )}
                    <UserDetailsComponent/>
                </div>
            </div>
			<section id="main" className="wrapper">
				<div className="inner">
				
				</div>
			</section>
        </div>
      
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