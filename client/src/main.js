import React from 'react'
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import Login from './login';
import NewUser from './newUser';
const App = () => {
    return (
        <NewUser/>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));