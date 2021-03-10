import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/user-reducer';
import { localStorageMiddleware } from './middlewares';
import { loadInputsFromLocalStorage } from './actions';

const reducer = combineReducers({ userReducer });
const store = createStore(reducer , applyMiddleware(thunk , localStorageMiddleware));
store.dispatch(loadInputsFromLocalStorage());
export default store;
window.store = store;