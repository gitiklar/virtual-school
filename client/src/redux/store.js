import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/user-reducer';
import { localStorageMiddleware , saveNewUserMiddleware } from './middlewares';
import { loadInputFromLocalStorage } from './actions';

const reducer = combineReducers({ userReducer });
const store = createStore(reducer , applyMiddleware(thunk , localStorageMiddleware , saveNewUserMiddleware));
store.dispatch(loadInputFromLocalStorage());
export default store;
window.store = store;