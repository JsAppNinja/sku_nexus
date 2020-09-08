import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UsersGrid from 'containers/UsersGrid';
import UserDetail from 'containers/UserDetail';

const routes = () => (
    <Switch>
        <Route path="/" component={UsersGrid} exact />
        <Route path="/user/:ccNumber" component={UserDetail} exact />
        <Route component={() => <Redirect to="/" />} />
    </Switch>
);

export default routes;
