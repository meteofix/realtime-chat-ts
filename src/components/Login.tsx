import React, {FC, useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase/compat";

const Login:FC = () => {
    const {auth} = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const user = await auth.signInWithPopup(provider)
        console.log(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width:400, background: 'lightgray'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"contained"}>Sign in with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;