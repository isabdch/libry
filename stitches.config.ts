import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white500: "#FFFFFF",
      lighterColor: "#FEF8EE", // lilac50
      bookCoverColor: "#FCF0D9",
      headerColor: "#F9E4BC", // lilac65
      mediumColor: "#F2C46E", // lilac80
      mediumDarkColor: "#EDAC33", // lilac100
      darkColor: "#B1780F", // purple100
      moreDarkColor: "#865B0C", // purple200
      darkerColor: "#322204", // purple500
    },

    fontSizes: {
      fs20: "20px",
      fs18: "18px",
      fs16: "16px",
      fs15: "15px",
      fs14: "14px",
    },
  },
  media: {
    min2560px: "(min-width: 2560px)",
    min1440px: "(min-width: 1440px)",
    max1250px: "(max-width: 1250px)",
    max1024px: "(max-width: 1024px)",
    max768px: "(max-width: 768px)",
    max720px: "(max-width: 720px)",
    max650px: "(max-width: 650px)",
    max560px: "(max-width: 560px)",
    max425px: "(max-width: 425px)",
    max375px: "(max-width: 375px)",
  },
  utils: {
    flexCenterJC: (value: string) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: value,
    }),
    flexCenterAI: (value: string) => ({
      display: "flex",
      alignItems: value,
      justifyContent: "center",
    }),
  },
  prefix: "radix",
});
