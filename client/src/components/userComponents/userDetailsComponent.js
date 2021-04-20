import React from 'react';
import { useSelector } from 'react-redux';
import { Button , Modal } from 'antd';
import 'antd/dist/antd.css';
import UserDetailsForm from './userDetailsForm';
import useModal from '../useModal';

const UserDetailsComponent = () => {
    const loggedInUserFormData = useSelector(state => state.userReducer.loggedInUserFormData);
    const [ isModalVisible , routeToHome , routeToModal ] = useModal('userDetails');

    return (
        <>
            <Button danger onClick={routeToModal}>פרטי משתמש</Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={routeToHome} onCancel={routeToHome}>
                <UserDetailsForm data={loggedInUserFormData}/>   
            </Modal>
        </>
    );
};

export default UserDetailsComponent;