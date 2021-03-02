import React from 'react'
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import Login from './login';
import AddNewUser from './addNewUser';
import Provider from 'react-redux';

const App = () => {
    return (
            <AddNewUser/>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));