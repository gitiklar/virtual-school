import produce from 'immer';

import { SAVE_NEW_USER_FORM_INPUT , RESET_FORM_DATA , SAVE_NEW_USER_MESSAGE , LOAD_INPUTS_FROM_LOCAL_STORAGE , SAVE_LOGIN_FORM_INPUT} from '../actions';

const initialState = {
    userFormData: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: {
            city: '',
            street: '',
            houseNumber: '',
        },
        role: null,
    },
    newUserMessage: {
        type: '',
        message:'',
    },
    loginFormData: {
        userName: '',
        password: '',
        role: '',
    },
};

export default produce((state , action)=>{
    switch(action.type) {
        case SAVE_NEW_USER_FORM_INPUT: 
            state.userFormData = action.payload;
            break;
        case SAVE_LOGIN_FORM_INPUT:
            state.loginFormData = action.payload;
            break;
        case SAVE_NEW_USER_MESSAGE: 
            state.newUserMessage = action.payload;
            break;
        case LOAD_INPUTS_FROM_LOCAL_STORAGE:
            state.userFormData = action.payload;
            break;
        case RESET_FORM_DATA:
            state.userFormData = initialState.userFormData;
            break;
    }
} , initialState);
