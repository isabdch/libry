import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import {
  SignInButtonComponent,
  SignOutButtonComponent,
} from "./SignButtonsStyle";
import { FaGoogle } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

export function SignButtons() {
  const { data: session } = useSession();

  return session ? (
    <SignOutButtonComponent
      title="Sign out"
      className="signOutButton"
      onClick={() => signOut()}
    >
      <Image
        src={session.user.image}
        className="profileImg"
        alt="Profile image"
        width="35px"
        height="35px"
      />
      {session.user.name} <BsXLg className="signOutIcon" />
    </SignOutButtonComponent>
  ) : (
    <SignInButtonComponent title="Sign in" onClick={() => signIn("google")}>
      Sign in with Google <FaGoogle className="googleIcon" />
    </SignInButtonComponent>
  );
}
