import React, {FC, useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import {RoutePaths} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


const AppRouter:FC = () => {
    const {auth} = useContext(Context)
    const [user]:Object[] = useAuthState(auth)
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component, exact}) =>
                    <Route key={path} path={path} component={Component} exact={exact}/>
                )}
                <Redirect to={RoutePaths.CHAT_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component, exact}) =>
                    <Route key={path} path={path} component={Component} exact={exact}/>
                )}
                <Redirect to={RoutePaths.LOGIN_ROUTE}/>
            </Switch>
        )
};

export default AppRouter;