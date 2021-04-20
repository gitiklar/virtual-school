import React from 'react';
import { Button , Modal } from 'antd';
import 'antd/dist/antd.css';
import AddNewUserForm from './addNewUserForm';
import useModal from '../useModal';

const AddNewUserComponent = () => {
    const [ isModalVisible , routeToHome , routeToModal ] = useModal('newUser');

    return (
        <>
            <Button type="primary" onClick={routeToModal}>הוספת משתמש חדש</Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={routeToHome} onCancel={routeToHome}>
                <AddNewUserForm/>   
            </Modal>
        </>
    );
};

export default AddNewUserComponent;