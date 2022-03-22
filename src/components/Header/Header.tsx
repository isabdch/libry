import { useEffect, useRef, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import "balloon-css";
import { SignButtons } from "./SignButtons/SignButtons";
import { HeaderComponent } from "./HeaderStyles";
import { BsList } from "react-icons/bs";

export function Header() {
  const [menu, setMenu] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      menuBtnRef.current?.removeAttribute("data-balloon-visible");
      menuBtnRef.current?.removeAttribute("aria-label");
      menuBtnRef.current?.removeAttribute("data-balloon-pos");
    }, 4000);
  }, []);

  function handleIsMenuOpen() {
    if (menu == true) {
      setMenu(false);
    } else {
      setMenu(true);
    }

    menuBtnRef.current?.removeAttribute("data-balloon-visible");
    menuBtnRef.current?.removeAttribute("aria-label");
    menuBtnRef.current?.removeAttribute("data-balloon-pos");
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
            <a onClick={() => setMenu(false)} className="myShelf">
              My bookshelf
            </a>
          </Link>
        </div>
        <SignButtons />
      </div>
      <button
        ref={menuBtnRef}
        data-balloon-visible
        aria-label="Click here to access your bookshelf"
        data-balloon-pos="right"
        onClick={handleIsMenuOpen}
        className="menuBtn"
      >
        <BsList />
      </button>
    </HeaderComponent>
  );
}
