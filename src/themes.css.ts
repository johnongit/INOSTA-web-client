import { createGlobalTheme, fontFace } from "@vanilla-extract/css";

export const vars = createGlobalTheme("body", {
  color: {
    primary: "#003049",
    secondary: "#D62828",
    tertiary: "#F77F00",
    quaternary: "#FCBF49",
  },
  font: {
    title: fontFace({
      src: "url(/Alatsi-Regular.ttf)",
    }),
    body: fontFace({
      src: "url(/AdventPro-VariableFont_wdth,wght.ttf)",
    }),
  },
  fontSize: {
    h1: "48px",
    body: "20px",
  },
});
