import React, {FC} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";

const Login:FC = () => {
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
                        <Button variant={"contained"}>Sign in with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;