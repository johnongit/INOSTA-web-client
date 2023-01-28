import { style } from "@vanilla-extract/css";
import { content } from "./common.css";
import { vars } from "./themes.css";

export const container = style({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  padding: "1rem 2rem",
  backgroundColor: vars.color.quaternary,
  boxSizing: "border-box",
  overflowY: "auto",
});

export const header = style([content]);

export const mainTitle = style({
  fontFamily: vars.font.title,
  color: vars.color.primary,
  fontSize: vars.fontSize.h1,
});

export const contentContainer = style({
  marginTop: "2rem",
  width: "100%",
  maxWidth: "50rem",
  margin: "0 auto",
});

export const paymentAndUpload = style({
  marginBottom: "2rem",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
