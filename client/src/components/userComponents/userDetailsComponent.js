import React, { useEffect , useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button , Modal } from 'antd';
import 'antd/dist/antd.css';
import UserDetailsForm from './userDetailsForm';

const UserDetailsComponent = () => {
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
            <Button danger onClick={routeToUserDetails}>פרטי משתמש</Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={routeToHome} onCancel={routeToHome}>
                <UserDetailsForm data={loggedInUserFormData}/>   
            </Modal>
        </>
    );
};

export default UserDetailsComponent;