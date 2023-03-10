import { style } from "@vanilla-extract/css";
import { vars } from "./themes.css";

export const text = style({
  fontFamily: vars.font.body,
  color: vars.color.secondary,
  fontSize: vars.fontSize.body,
});

export const row = style({
  display: "flex",
  flexDirection: "row",
});

export const centered = style({
  justifyContent: "center",
  alignItems: "center",
});

export const centeredRow = style([row, centered]);

export const content = style({
  width: "max-content",
  maxWidth: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
