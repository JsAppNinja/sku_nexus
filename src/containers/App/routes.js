import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersGrid from 'containers/UsersGrid';
import UserDetail from 'containers/UserDetail';

const ControlledRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => <Component {...props} />} />
);

const routes = () => (
    <Switch>
        <ControlledRoute path="/" component={UsersGrid} />
        <ControlledRoute path="/user/:ccNumber" component={UserDetail} />
    </Switch>
);

export default routes;
