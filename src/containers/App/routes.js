import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersGrid from 'containers/UsersGrid';

const ControlledRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => <Component {...props} />} />
);

const routes = () => (
    <Switch>
        <ControlledRoute path="/" component={UsersGrid} />
    </Switch>
);

export default routes;
