import React from 'react'
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import Login from './login';

const App = () => {
    return (
        <Login/>
    );
}

ReactDOM.render(<App/> , document.querySelector('main'));