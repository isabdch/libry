import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { BookshelfModal } from "./BookshelfModal/BookshelfModal";
import { HeaderComponent, StyledSwitchThumb, SwitchRoot } from "./HeaderStyles";
import { SignButtons } from "./SignButtons/SignButtons";
import { BsList } from "react-icons/bs";

export function Header() {
  const [menu, setMenu] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (localStorage.getItem("isMenuOpen") == null) {
      localStorage.setItem("isMenuOpen", JSON.stringify(false));
    } else {
      setMenu(JSON.parse(localStorage.getItem("isMenuOpen")));
    }

    if (localStorage.getItem("theme") == null) {
      setChecked(false);
    } else if (localStorage.getItem("theme") == "dark") {
      setChecked(true);
    } else {
      setChecked(false);
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
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
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
        <span className="buttons">
          <span onClick={toggleTheme}>
            <SwitchRoot
              checked={checked}
              onCheckedChange={() => {
                if (checked == false) {
                  setChecked(true);
                } else {
                  setChecked(false);
                }
              }}
            >
              <StyledSwitchThumb />
            </SwitchRoot>
          </span>
          <SignButtons />
        </span>
      </div>
      <button ref={menuBtnRef} onClick={handleIsMenuOpen} className="menuBtn">
        <BsList />
      </button>
    </HeaderComponent>
  );
}
