
import { auth, firebase } from '../firebase_config'

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const LoginWithGoogle = async () => {

    const user = await new Promise(async (resolve, reject) => {
        await firebase.auth().signInWithPopup(GoogleAuthProvider)
            .then((result) => {
                const credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const isNewUser = result.additionalUserInfo.isNewUser
                console.log(result)
                resolve({ user,isNewUser, token });
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                const credential = error.credential;

                console.log({ errorCode, errorMessage, email, credential });
                reject({ errorCode, errorMessage, email, credential });
            });
    })
    return user;
}


export const Logout = async () => {
    await auth().signOut()
        .then(() => {
            console.log("Salio exitosamente")
        }).catch((error) => {
            console.log(error)
        });
}