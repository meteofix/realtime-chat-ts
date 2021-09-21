import React, {FC} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import {RoutePaths} from "../utils/consts";

const AppRouter:FC = () => {
    const user:boolean = false
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component, exact}) =>
                    <Route path={path} component={Component} exact={exact}/>
                )}
                <Redirect to={RoutePaths.CHAT_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component, exact}) =>
                    <Route path={path} component={Component} exact={exact}/>
                )}
                <Redirect to={RoutePaths.LOGIN_ROUTE}/>
            </Switch>
        )
};

export default AppRouter;