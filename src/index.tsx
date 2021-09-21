import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp({
    apiKey: "AIzaSyCTmG2VazPAq8sUuZyVt9z0tnfH8v3DXUA",
    authDomain: "realtime-chat-83a8b.firebaseapp.com",
    projectId: "realtime-chat-83a8b",
    storageBucket: "realtime-chat-83a8b.appspot.com",
    messagingSenderId: "568058827494",
    appId: "1:568058827494:web:cb620105bbb52948e0a127",
    measurementId: "G-GJMLMFXWWK"
});

interface IContext { //????
    firebase?: any,
    auth?: any,
    firestore?: any
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const context:IContext = {firebase, auth, firestore}

export const Context = createContext<IContext>(context)

ReactDOM.render(
    <Context.Provider value={context}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

