import { useSession, signIn, signOut } from "next-auth/react";
import {
  SignInButtonComponent,
  SignOutButtonComponent,
} from "./SignButtonStyle";
import { FaGoogle } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Image from "next/image";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <SignOutButtonComponent className="signOutButton" onClick={() => signOut()}>
      <Image src={session.user.image} className="profileImg" alt="Profile image" width="35px" height="35px" />
      {session.user.name} <BsXLg className="signOutIcon" />
    </SignOutButtonComponent>
  ) : (
    <SignInButtonComponent title="Sign Out" onClick={() => signIn("google")}>
      Sign in with Google <FaGoogle className="googleIcon" />
    </SignInButtonComponent>
  );
}
