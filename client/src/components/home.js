import React from 'react';
import { useLocation } from "react-router-dom";

import AddNewUser from './addNewUser';

const Home = () => {
    const location = useLocation();
    const { role } =  location.state;
    return (
        <div style={{width:'100vw' , height:'100vh' , backgroundColor:'lightpink' , fontSize:'50px' , textAlign:'center' , alignItems:'center' , justifyContent:'center'}}>
            <div>שלום</div>
            <div>{role}</div>
            {role === 'מנהל' && 
            <>
                <div> קומפוננטה עבור מנהל </div>
                <AddNewUser/>
            </>
            }
            {role === 'מורה' && <div> קומפוננטה עבור מורה </div>}
            {role === 'תלמיד' && <div> קומפוננטה עבור תלמיד </div>}
        </div>
    );
};
export default Home;