import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";
import { auth, signInGoogle, signOutGoogle } from "../../../services/auth/auth";
import { RootState } from "../../../store/types";
import Link from "next/link";
import Image from "next/image";
import {
  ModalAction,
  ModalCancel,
  ModalContent,
  ModalDescription,
  ModalOverlay,
  ModalTitle,
  ModalTrigger,
  SignInButtonComponent,
} from "./SignButtonsStyle";
import { FaGoogle } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { toast } from "react-toastify";

export function SignButtons() {
  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });
  const dispatch = useDispatch<Dispatch<Action>>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({ type: "SET_USER_ON", payload: user });
    } else {
      dispatch({ type: "SET_USER_OFF" });
    }
  });

  return isSignedIn ? (
    <AlertDialog.Root>
      <ModalTrigger>
        <Image
          src={isSignedIn.photoURL}
          className="profileImg"
          alt="Profile image"
          width="35px"
          height="35px"
        />
        {isSignedIn.displayName} <BsXLg className="signOutIcon" />
      </ModalTrigger>
      <AlertDialog.Portal>
        <ModalOverlay />
        <ModalContent onCloseAutoFocus={(event) => event.preventDefault()}>
          <ModalTitle>Sign out</ModalTitle>
          <ModalDescription>
            Are you sure you want to sign out?
          </ModalDescription>
          <div>
            <ModalCancel>Cancel</ModalCancel>
            <Link href="/" passHref>
              <ModalAction
                onClick={() => {
                  signOutGoogle();
                  toast.info("You're signed out.", { theme: "colored" });
                }}
              >
                Sign out
              </ModalAction>
            </Link>
          </div>
        </ModalContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ) : (
    <SignInButtonComponent
      title="Sign in"
      onClick={() => {
        signInGoogle();
      }}
    >
      Sign in with Google <FaGoogle className="googleIcon" />
    </SignInButtonComponent>
  );
}
