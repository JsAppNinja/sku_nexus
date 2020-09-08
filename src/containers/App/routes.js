import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserManagement from 'containers/UserManagement';

const ControlledRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => <Component {...props} />} />
);

const routes = () => (
    <Switch>
        <ControlledRoute path="/" component={UserManagement} />
    </Switch>
);

export default routes;
