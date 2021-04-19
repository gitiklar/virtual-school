import React from 'react';
import { Link } from 'react-router-dom';

const Entry = () => {
    
    return (
        <span className="container" dir="rtl">
            <header id="header">
                <Link to="/login">להתחברות</Link>
                <img src="../../styles/images/logo.png"></img>
            </header>

            <section id="banner">
                <div className="inner">
                    <h1>למידה מרחוק</h1>
                    <p>ברוכים הבאים למערכת ניהול למידה מרחוק <br/>עבור מוסדות לימוד.</p>
                </div>
                <video autoPlay loop muted playsInline src='../../styles/images/banner.mp4'></video>
            </section>

            <section id="footer">
                <div className="inner">
                    <header className="special">
                        <h2>גם אתם רוצים לרכוש מערכת עבור בית הספר?</h2>
                        <p>צרו איתנו קשר בפלא': 054-8530600 או במייל: gitiklar@gmail.com</p>
                    </header>
                </div>
            </section>
        </span>
    );
};
export default Entry;