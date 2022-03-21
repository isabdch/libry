import { useSession, signIn, signOut } from "next-auth/react";
import { HeaderComponent } from "./HeaderStyles";
import Image from "next/image";
import { SignInButton } from "./SignInButton/SignInButton";

export function Header() {
  return (
    <HeaderComponent>
      <div className="container">
        <div className="content">
          <span className="logo">
            <Image
              src="/images/logo.svg"
              alt="e-Library"
              width="40px"
              height="40px"
            />
            <h1>BOOKS</h1>
          </span>
          <a href="#" className="myShelf">
            My bookshelf
          </a>
        </div>
        <SignInButton />
      </div>
    </HeaderComponent>
  );
}
