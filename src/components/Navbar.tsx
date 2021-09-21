import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import React, {FC, useContext} from 'react';
import {Button, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {RoutePaths} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar:FC = () => {
    const {auth} = useContext(Context)
    const [user]:Object[] = useAuthState(auth)
    return (
        <AppBar color="primary" position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent={"flex-end"} >
                    {user ?
                        <Button onClick={() => auth.signOut()} style={{color: 'white', borderColor: 'white', textDecoration: 'none'}}>Log out</Button>
                        :
                        <NavLink to={RoutePaths.LOGIN_ROUTE}>
                            <Button style={{color: 'white', borderColor: 'white', textDecoration: 'none'}} >Log in</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;