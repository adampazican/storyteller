import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import IndexRoute from "./routes/IndexRoute";
import RegistrationRoute from "./routes/RegistrationRoute";
import LoginRoute from "./routes/LoginRoute";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <h3>about</h3>
                </Route>
                <Route path="/register">
                    <RegistrationRoute/>
                </Route>
                <Route path="/login">
                    <LoginRoute/>
                </Route>
                <Route path="/">
                    <IndexRoute/>
                </Route>
            </Switch>
        </Router>
    );
};