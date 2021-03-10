export const SAVE_NEW_USER_FORM_INPUT = 'SAVE_NEW_USER_FORM_INPUT';
export const RESET_FORM_DATA = 'RESET_FORM_DATA';
export const SAVE_NEW_USER_MESSAGE = 'SAVE_NEW_USER_MESSAGE';
export const LOAD_INPUTS_FROM_LOCAL_STORAGE = 'LOAD_INPUTS_FROM_LOCAL_STORAGE';
export const SAVE_LOGIN_FORM_INPUT = 'SAVE_LOGIN_FORM_INPUT';
import { postRequest } from "../service";

export function saveNewUserFormInput(newUserFormData) {
   return { type: SAVE_NEW_USER_FORM_INPUT , payload: newUserFormData};
}

export function saveLoginFormInput(newLoginFormData) {
    return { type: SAVE_LOGIN_FORM_INPUT , payload: newLoginFormData};
 }

export function saveNewUser() {
    return async function(dispatch, getState) {
        try {     
            const response = await postRequest('/user' , getState().userReducer.userFormData);
            dispatch(saveNewUserMessage(response.type, response.message));
        } catch(err) {
            console.log(err);
            dispatch(saveNewUserMessage('error','!אופססס התרחשה שגיאה , הטופס לא נשלח'));
        }
        dispatch(saveNewUserMessage('',''));
    }
}

export function resetFormData() {
    return { type: RESET_FORM_DATA };
}

export function saveNewUserMessage(type , message) {
    return { type: SAVE_NEW_USER_MESSAGE , payload: { type , message } };
}

export function loadInputsFromLocalStorage() {
    return { type: LOAD_INPUTS_FROM_LOCAL_STORAGE };
}

export function login(history) {
    return async function(dispatch, getState) {
        try {
            const response = await postRequest('/login' , getState().userReducer.loginFormData);
            if(response.status === 200) {
                history.push({ pathname: '/home',state: { role : response.role } });
            } else {
                console.log(response.error);
            }
        } catch(err) {
    
        }
    }
}