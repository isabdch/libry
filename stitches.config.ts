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
      lilac50: "#EFDBFF",
      lilac65: "#E3BFFF",
      lilac80: "#D49BFF",
      lilac100: "#C77DFF",
      purple100: "#9D4EDD",
      purple200: "#7B2CBF",
      purple500: "#5A189A",
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
    max1080px: "(max-width: 1080px)",
    max860px: "(max-width: 860px)",
    max768px: "(max-width: 768px)",
    max720px: "(max-width: 720px)",
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
