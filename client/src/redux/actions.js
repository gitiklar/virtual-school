export const SAVE_NEW_USER_FORM_INPUT = 'SAVE_NEW_USER_FORM_INPUT';
export const RESET_FORM_DATA = 'RESET_FORM_DATA';
export const INDICATION_MESSAGE = 'INDICATION_MESSAGE';
export const LOAD_INPUTS_FROM_LOCAL_STORAGE = 'LOAD_INPUTS_FROM_LOCAL_STORAGE';
export const SAVE_LOGIN_FORM_INPUT = 'SAVE_LOGIN_FORM_INPUT';
export const UPDATE_LOGGED_IN_USER_FORM_DATA = 'UPDATE_LOGGED_IN_USER_FORM_DATA'
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
            const response = await postRequest('/user' , getState().userReducer.subscribeUserFormData);
            dispatch(indicationMessage(response.type, response.message));
        } catch(err) {
            console.log(err);
            dispatch(indicationMessage('error','!אופססס התרחשה שגיאה , הטופס לא נשלח'));
        }
    }
}

export function resetFormData() {
    return { type: RESET_FORM_DATA };
}

export function indicationMessage(type , message) {
    return { type: INDICATION_MESSAGE , payload: { type , message } };
}

export function loadInputsFromLocalStorage() {
    return { type: LOAD_INPUTS_FROM_LOCAL_STORAGE };
}

function updateLoggedInUserFormDate(user) {
    return { type: UPDATE_LOGGED_IN_USER_FORM_DATA , payload: user };
}

export function login(history) {
    return async function(dispatch, getState) {
        try {
            const response = await postRequest('/login' , getState().userReducer.loginFormData);
            if(response.status === 200) {
                dispatch(updateLoggedInUserFormDate(response.user));
                history.push('/home');
            } else {
                dispatch(indicationMessage(response.type, response.message));
            }
        } catch(err) {
            dispatch(indicationMessage('error','!אופססס התרחשה שגיאה'));
        }
    }
}