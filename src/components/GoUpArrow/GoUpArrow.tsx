import { useState } from "react";
import { GoArrowUp } from "react-icons/go";
import { StyledGoUpButton } from "./GoUpArrowStyles";

export function GoUpArrow() {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  function checkScrollTop() {
    if (!showScroll && window.pageYOffset > 1) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 1) {
      setShowScroll(false);
    }
  }

  function scrollTop() {
    window.scrollTo({ top: 0 });
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <StyledGoUpButton
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <GoArrowUp />
    </StyledGoUpButton>
  );
}
