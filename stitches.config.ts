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
    colors: {},

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
    max720px: "(max-width: 720px)",
  },
  utils: {
    flexCenter: (value: string) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: value,
    }),
  },
  prefix: "radix",
});
