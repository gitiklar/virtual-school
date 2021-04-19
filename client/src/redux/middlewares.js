import {  SAVE_NEW_USER_FORM_INPUT , LOAD_INPUTS_FROM_LOCAL_STORAGE , RESET_FORM_DATA, INDICATION_MESSAGE, indicationMessage } from "./actions";

export const localStorageMiddleware = ({ getState }) => next => action => {
    switch (action.type) {
        case SAVE_NEW_USER_FORM_INPUT:
            localStorage.setItem('subscribeUserFormData' , JSON.stringify(action.payload));
            break;
        case LOAD_INPUTS_FROM_LOCAL_STORAGE:
            action.payload = JSON.parse(localStorage.getItem('subscribeUserFormData'));
            if(!action.payload) return;
            break;
        case RESET_FORM_DATA:
            const nextAction = next(action);
            localStorage.setItem('subscribeUserFormData' , JSON.stringify(getState().userReducer.subscribeUserFormData));
            return nextAction;
    }
    return next(action);
}

export const clearIndicationMessageForEachMessage = store => next => action => {
    if (action.type!== INDICATION_MESSAGE) return next(action);
    const nextAction = next(action);
    dispatch(indicationMessage('',''));
    return nextAction;
}