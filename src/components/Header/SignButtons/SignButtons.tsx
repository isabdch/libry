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
import { ImpulseSpinner } from "react-spinners-kit";
import { useEffect, useState } from "react";

export function SignButtons() {
  const dispatch = useDispatch<Dispatch<Action>>();

  const isSignedIn = useSelector((state: RootState) => {
    return state.isUserSignedIn;
  });

  const [loading, setLoading] = useState<boolean>(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({ type: "SET_USER_ON", payload: user });
    } else {
      dispatch({ type: "SET_USER_OFF" });
    }
  });

  useEffect(() => {
    if (localStorage.getItem("isLoading") == null) {
      localStorage.setItem("isLoading", JSON.stringify(false));
    } else {
      setLoading(JSON.parse(localStorage.getItem("isLoading")));
    }
  }, []);

  return isSignedIn ? (
    <AlertDialog.Root>
      <ModalTrigger>
        <div className="profileImg">
          <Image src={isSignedIn.photoURL} alt="Profile image" layout="fill" />
        </div>
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
                  localStorage.removeItem("user-accessToken");
                  localStorage.setItem("isLoading", JSON.stringify(false));
                  toast.info("You're signed out.", { theme: "colored" });
                  setLoading(false);
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
        localStorage.setItem("isLoading", JSON.stringify(true));
      }}
    >
      {loading == true ? (
        <span>
          <ImpulseSpinner
            size={2}
            sizeUnit="em"
            frontColor="#9D4EDD"
            backColor="#E3BFFF"
          />
        </span>
      ) : (
        <span className="noLoading">
          Sign in with Google <FaGoogle className="googleIcon" />
        </span>
      )}
    </SignInButtonComponent>
  );
}
