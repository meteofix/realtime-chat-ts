import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import React, {FC} from 'react';
import {Button, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {RoutePaths} from "../utils/consts";

const Navbar:FC = () => {
    const user:boolean = false

    return (
        <AppBar color="primary" position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent={"flex-end"} >
                    {user ?
                        <Button variant={"outlined"}>Log out</Button>
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