import React from 'react';
import { Link } from 'react-router-dom';

const Entry = () => {
    return (
        <div style={{width:'100vw' , height:'100vh' , backgroundColor:'lightpink' , fontSize:'50px' , textAlign:'center' , alignItems:'center' , justifyContent:'center'}}>
            <div>!ברוכים הבאים לבית הספר הוירטואלי</div>
            <div><Link to="/login">להתחברות</Link></div>
        </div>
    );
};
export default Entry;