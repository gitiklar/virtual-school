import React, { useEffect , useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button , Modal } from 'antd';
import 'antd/dist/antd.css';
import AddNewUserForm from './addNewUserForm';

const AddNewUserComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const history = useHistory();
    const routeToHome = () => history.push("/home");
    const routeToAddNewUser = () => history.push("/home/newUser");
    
    useEffect(() => {
        history.location.pathname === "/home" && setIsModalVisible(false);
        history.location.pathname === "/home/newUser" && setIsModalVisible(true);
      }, [history.location.pathname]);

    return (
        <>
            <Button type="primary" onClick={routeToAddNewUser}>הוספת משתמש חדש</Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={routeToHome} onCancel={routeToHome}>
                <AddNewUserForm/>   
            </Modal>
        </>
    );
};

export default AddNewUserComponent;