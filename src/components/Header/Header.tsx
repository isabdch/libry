import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { SignButtons } from "./SignButtons/SignButtons";
import { HeaderComponent } from "./HeaderStyles";
import { BsList } from "react-icons/bs";
import { useState } from "react";

export function Header() {
  const [menu, setMenu] = useState(true);

  function handleIsMenuOpen() {
    if (menu == true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  return (
    <HeaderComponent className={menu == true ? "" : "hideMenu"}>
      <div className={menu == true ? "container" : "container hideMenuNav"}>
        <div className="content">
          <Link href="/" passHref>
            <span className="logo">
              <Image
                src="/images/logo.svg"
                alt="e-Library"
                width="40px"
                height="40px"
              />
              <h1>LIBRY</h1>
            </span>
          </Link>
          <Link href="/mybookshelf">
            <a className="myShelf">My bookshelf</a>
          </Link>
        </div>
        <SignButtons />
      </div>
      <button onClick={handleIsMenuOpen} className="menuBtn">
        <BsList />
      </button>
    </HeaderComponent>
  );
}
