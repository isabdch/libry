import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/clientApp";

const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export function signInGoogle() {
  signInWithRedirect(auth, provider);
}

export function isSignedIn() {
  getRedirectResult(auth)
    .then((result) => {
        if (result) {
          // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(error);
    });
}

export function signOutGoogle() {
  signOut(auth)
    .then(() => {
      console.log("Signed out succesfully.");
    })
    .catch((error) => {
      console.log(error);
    });
}
