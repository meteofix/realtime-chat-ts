import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {chatFrame, rootContainer, rootGridContainer, sendForm} from "./Chat.module.css";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from 'firebase/compat';

interface IUser {
    uid: string,
    displayName: string,
    photoURL: string,
    email: string
}

const Chat: FC = () => {
    const {auth, firestore} = useContext(Context)
    const [user]:IUser[]= useAuthState(auth)
    const [value, setValue] = useState<string> ('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    console.log(user)
    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if(loading) {
        return <Loader/>
    }

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
                    <Button onClick={sendMessage} variant={"outlined"}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;