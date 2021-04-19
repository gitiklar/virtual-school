import produce from 'immer';

import { SAVE_NEW_USER_FORM_INPUT , RESET_FORM_DATA , INDICATION_MESSAGE , LOAD_INPUTS_FROM_LOCAL_STORAGE , SAVE_LOGIN_FORM_INPUT, UPDATE_LOGGED_IN_USER_FORM_DATA} from '../actions';

const initialState = {
    subscribeUserFormData: {
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
    loggedInUserFormData: {},
    indicationMessage: {
        type: '',
        message:'',
        key:'abc',
    },
    loginFormData: {
        userName: '',
        password: '',
    },
};

export default produce((state , action)=>{
    switch(action.type) {
        case SAVE_NEW_USER_FORM_INPUT: 
            state.subscribeUserFormData = action.payload;
            break;
        case SAVE_LOGIN_FORM_INPUT:
            state.loginFormData = action.payload;
            break;
        case INDICATION_MESSAGE: 
            state.indicationMessage = {...state.indicationMessage, ...action.payload}
            break;
        case LOAD_INPUTS_FROM_LOCAL_STORAGE:
            state.subscribeUserFormData = action.payload;
            break;
        case RESET_FORM_DATA:
            state.subscribeUserFormData = initialState.subscribeUserFormData;
            break;
        case UPDATE_LOGGED_IN_USER_FORM_DATA:
            state.loggedInUserFormData = action.payload;
            break;
    }
} , initialState);
