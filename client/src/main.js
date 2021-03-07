import React from 'react'
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import Login from './login';
import AddNewUser from './addNewUser';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <AddNewUser/>
        </Provider>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));