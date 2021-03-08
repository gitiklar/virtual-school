export const SAVE_FORM_INPUT = 'SAVE_FORM_INPUT';
export const SAVE_NEW_USER = 'SAVE_NEW_USER';
export const RESET_FORM_DATA = 'RESET_FORM_DATA';
export const SAVE_NEW_USER_MESSAGE = 'SAVE_NEW_USER_MESSAGE';
export const LOAD_INPUTS_FROM_LOCAL_STORAGE = 'LOAD_INPUTS_FROM_LOCAL_STORAGE';

export function saveFormInput(newUserFormData) {
   return { type: SAVE_FORM_INPUT , payload: newUserFormData};
}

export function saveNewUser() {
    return { type: SAVE_NEW_USER };
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


