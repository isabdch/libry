import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";
import { auth, signInGoogle, signOutGoogle } from "../../../services/auth/auth";
import { RootState } from "../../../store/types";
import Image from "next/image";
import {
  SignInButtonComponent,
  SignOutButtonComponent,
} from "./SignButtonsStyle";
import { FaGoogle } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

export function SignButtons() {
  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });
  const dispatch = useDispatch<Dispatch<Action>>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({ type: "SET_USER_ON", payload: user });
      console.log(user);
    } else {
      console.log("Nobody is signed in.");
      dispatch({ type: "SET_USER_OFF" });
    }
  });

  return isSignedIn ? (
    <SignOutButtonComponent
      title="Sign out"
      className="signOutButton"
      onClick={signOutGoogle}
    >
      <Image
        src={isSignedIn.photoURL}
        className="profileImg"
        alt="Profile image"
        width="35px"
        height="35px"
      />
      {isSignedIn.displayName} <BsXLg className="signOutIcon" />
    </SignOutButtonComponent>
  ) : (
    <SignInButtonComponent title="Sign in" onClick={signInGoogle}>
      Sign in with Google <FaGoogle className="googleIcon" />
    </SignInButtonComponent>
  );
}
