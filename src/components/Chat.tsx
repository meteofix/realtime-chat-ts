import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {chatFrame, rootContainer, rootGridContainer, sendForm} from "./Chat.module.css";


const Chat: FC = () => {
    const {auth, firestore} = useContext(Context)
    const [user, loading, error]= useAuthState(auth)
    const [value, setValue] = useState<string> ('')



    return (
        <Container className={rootContainer} >
            <Grid container className={rootGridContainer}
                  style={{height: window.innerHeight - 70}}
            >
                <div className={chatFrame}>
                </div>
                <Grid container className={sendForm}>
                    <TextField
                        fullWidth
                        maxRows={2}
                        variant={"outlined"}
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        placeholder="Enter your message here"
                    />
                    <Button variant={"outlined"}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;