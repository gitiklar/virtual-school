import { postRequest } from "../service";
import { saveNewUserMessage ,  SAVE_FORM_INPUT , LOAD_INPUT_FROM_LOCAL_STORAGE , RESET_FORM_DATA , SAVE_NEW_USER} from "./actions";

export const localStorageMiddleware = ({ getState }) => next => action => {
    switch (action.type) {
        case SAVE_FORM_INPUT:
            localStorage.setItem('userFormData' , JSON.stringify(action.payload));
            break;
        case LOAD_INPUT_FROM_LOCAL_STORAGE:
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

export const saveNewUserMiddleware = ({ dispatch , getState }) => next => async action => {
    if(action.type !== SAVE_NEW_USER) return next(action);
    try {     
        const response = await postRequest('/user' , getState().userReducer.userFormData);
        if(response.error) {
            dispatch(saveNewUserMessage('error', `${response.error.message}    :אופססס התרחשה שגיאה`));
        }
        if(response.status === 200) {
            dispatch(saveNewUserMessage('success','!המשתמש נוסף בהצלחה'));
        }
    } catch(err) {
        console.log(err);
        dispatch(saveNewUserMessage('error','!אופססס התרחשה שגיאה , הטופס לא נשלח'));
    }
    dispatch(saveNewUserMessage('',''));
    return next(action);
}
