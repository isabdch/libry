import { keyframes, styled } from "../../../stitches.config";
import * as Popover from "@radix-ui/react-popover";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const PopoverTrigger = styled(Popover.Trigger, {
  padding: "5px 20px",
  borderRadius: "2rem",
  backgroundColor: "$mediumDarkColor",
  color: "$white500",
  fontSize: "1.2em",
  transition: ".2s",

  "&:hover": {
    backgroundColor: "$mediumColor",
  },

  "&:active": {
    backgroundColor: "$mediumDarkColor",
  },

  "@min1440px": {
    fontSize: "1vw",
  },
});

export const PopoverContent = styled(Popover.Content, {
  backgroundColor: "$white500",
  boxShadow: "0px 1px 5px #EDAC33",
  width: "200px",
  borderRadius: "0.5em",
  flexDirection: "column",
  flexCenterJC: "space-evenly",

  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  "@min1440px": {
    width: "10vw",
    fontSize: "1vw",
  },
});

export const PopoverArrow = styled(Popover.Arrow, {
  fill: "$white500",
});

export const PopoverClose = styled(Popover.Close, {
  width: "100%",
  flexCenterAI: "",
  backgroundColor: "transparent",
  fontSize: "1em",

  ".option": {
    flexCenterAI: "center",
    width: "80%",
    padding: "10px 0px",
    color: "$darkerColor",
    cursor: "pointer",
    transition: ".2s",

    "&.center": {
      borderTop: "1px solid $headerColor",
      borderBottom: "1px solid $headerColor",
    },

    "&:hover": {
      color: "$mediumDarkColor",
    },
  },
});


