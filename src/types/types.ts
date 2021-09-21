import firebase from "firebase/compat";

export interface IUser {
    uid: string,
    displayName: string,
    photoURL: string,
    email: string
}
// export interface IMessage {
//     Uid: string
//     displayName: string
//     photoURL: string
//     text: string
//     createdAt: string
//
// }
    // uid: user.uid,
    // displayName: user.displayName,
    // photoURL: user.photoURL,
    // text: value,
    // createdAt: firebase.firestore.FieldValue.serverTimestamp()