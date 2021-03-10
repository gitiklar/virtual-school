import {  SAVE_NEW_USER_FORM_INPUT , LOAD_INPUTS_FROM_LOCAL_STORAGE , RESET_FORM_DATA } from "./actions";

export const localStorageMiddleware = ({ getState }) => next => action => {
    switch (action.type) {
        case SAVE_NEW_USER_FORM_INPUT:
            localStorage.setItem('userFormData' , JSON.stringify(action.payload));
            break;
        case LOAD_INPUTS_FROM_LOCAL_STORAGE:
            action.payload = JSON.parse(localStorage.getItem('userFormData'));
            if(!action.payload) return;
            break;
        case RESET_FORM_DATA:
            const nextAction = next(action);
            localStorage.setItem('userFormData' , JSON.stringify(getState().userReducer.userFormData));
            return nextAction;
    }
    return next(action);
}