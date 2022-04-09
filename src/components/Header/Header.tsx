import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";
import { RootState } from "../../store/types";
import { BookshelfModal } from "./BookshelfModal/BookshelfModal";
import { HeaderComponent, StyledSwitchThumb, SwitchRoot } from "./HeaderStyles";
import { SignButtons } from "./SignButtons/SignButtons";
import { BsList } from "react-icons/bs";

export function Header() {
  const [menu, setMenu] = useState<boolean>(false);

  const menuRef = useRef<HTMLButtonElement>(null);

  const dispatch = useDispatch<Dispatch<Action>>();

  const checked = useSelector((state: RootState) => {
    return state.switch;
  });

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (localStorage.getItem("isMenuOpen") == null) {
      localStorage.setItem("isMenuOpen", JSON.stringify(false));
    } else {
      setMenu(JSON.parse(localStorage.getItem("isMenuOpen")));
    }

    if (localStorage.getItem("theme") == null) {
      dispatch({ type: "NOT_CHECKED" });
    } else if (localStorage.getItem("theme") == "dark") {
      dispatch({ type: "CHECKED" });
    } else {
      dispatch({ type: "NOT_CHECKED" });
    }
  }, [dispatch]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
        localStorage.setItem("isMenuOpen", JSON.stringify(false));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

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
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <HeaderComponent ref={menuRef} className={menu == true ? "" : "hideMenu"}>
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
                  dispatch({ type: "CHECKED" });
                } else {
                  dispatch({ type: "NOT_CHECKED" });
                }
              }}
            >
              <StyledSwitchThumb />
            </SwitchRoot>
          </span>
          <SignButtons />
        </span>
      </div>
      <button onClick={handleIsMenuOpen} className="menuBtn">
        <BsList />
      </button>
    </HeaderComponent>
  );
}
