import { auth, signInGoogle, signOutGoogle } from "../../../services/auth/auth";
import Image from "next/image";
import {
  SignInButtonComponent,
  SignOutButtonComponent,
} from "./SignButtonsStyle";
import { FaGoogle } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";

export function SignButtons() {
  const [userOn, setUserOn] = useState<User>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserOn(user);
    } else {
      console.log("Nobody is signed in.");
      setUserOn(null);
    }
  });

  return userOn ? (
    <SignOutButtonComponent
      title="Sign out"
      className="signOutButton"
      onClick={signOutGoogle}
    >
      <Image
        src={userOn.photoURL}
        className="profileImg"
        alt="Profile image"
        width="35px"
        height="35px"
      />
      {userOn.displayName} <BsXLg className="signOutIcon" />
    </SignOutButtonComponent>
  ) : (
    <SignInButtonComponent title="Sign in" onClick={signInGoogle}>
      Sign in with Google <FaGoogle className="googleIcon" />
    </SignInButtonComponent>
  );
}
