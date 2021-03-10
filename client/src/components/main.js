import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from '../redux/store';
import '../../styles/main.scss';
import Entry from './entry';
import Login from './login';
import Home from './home';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/' component={Entry}/>
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));