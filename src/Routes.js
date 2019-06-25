import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    component={Login}
                    exact
                    path="/"
                />
                <Route
                    component={Dashboard}
                    exact
                    path="/dashboard"
                />
                <Redirect to="/not-found" />
            </Switch>
        );
    }
}
