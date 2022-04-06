import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookshelfModal } from "./BookshelfModal/BookshelfModal";
import "balloon-css";
import { HeaderComponent } from "./HeaderStyles";
import { SignButtons } from "./SignButtons/SignButtons";
import { BsList } from "react-icons/bs";

export function Header() {
  const [menu, setMenu] = useState<boolean>(false);
  const [showBalloon, setShowBalloon] = useState<boolean>(true);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      menuBtnRef.current?.removeAttribute("data-balloon-visible");
      menuBtnRef.current?.removeAttribute("aria-label");
      menuBtnRef.current?.removeAttribute("data-balloon-pos");
      localStorage.setItem("showBalloon", JSON.stringify(false));
    }, 4000);

    if (localStorage.getItem("isMenuOpen") == null) {
      localStorage.setItem("isMenuOpen", JSON.stringify(false));
    } else {
      setMenu(JSON.parse(localStorage.getItem("isMenuOpen")));
      setShowBalloon(JSON.parse(localStorage.getItem("showBalloon")));
    }
  }, []);

  function handleIsMenuOpen() {
    if (menu == true) {
      setMenu(false);
      localStorage.setItem("isMenuOpen", JSON.stringify(false));
    } else {
      setMenu(true);
      localStorage.setItem("isMenuOpen", JSON.stringify(true));
    }

    //
    localStorage.setItem("showBalloon", JSON.stringify(false));
    menuBtnRef.current?.removeAttribute("data-balloon-visible");
    menuBtnRef.current?.removeAttribute("aria-label");
    menuBtnRef.current?.removeAttribute("data-balloon-pos");
  }

  return (
    <HeaderComponent className={menu == true ? "" : "hideMenu"}>
      <div className={menu == true ? "container" : "container hideMenuNav"}>
        <div className="content">
          <Link href="/" passHref>
            <span
              className="logo"
              onClick={() => {
                setMenu(false);
                localStorage.setItem("isMenuOpen", JSON.stringify(false));
              }}
            >
              <div className="img">
                <Image src="/images/logo.svg" alt="e-Library" layout="fill" />
              </div>
              <h1>LIBRY</h1>
            </span>
          </Link>
          <BookshelfModal setMenu={setMenu} />
        </div>
        <SignButtons />
      </div>
      {showBalloon ? (
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
      ) : (
        <button ref={menuBtnRef} onClick={handleIsMenuOpen} className="menuBtn">
          <BsList />
        </button>
      )}
    </HeaderComponent>
  );
}
