import { style } from "@vanilla-extract/css";
import { vars } from "../../themes.css";

export const input = style({
  height: "1.8rem",

  borderRadius: "8px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: vars.color.tertiary,
});

export const fileInput = style({
  display: "none",
});

export const fileInputLabel = style({
  padding: "0.5rem 2rem",
  background: vars.color.tertiary,
  lineHeight: "20px",
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.body,
  color: vars.color.primary,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  cursor: "pointer",

  transition: "0.3s",

  borderRadius: "8px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: vars.color.tertiary,

  ":hover": {
    borderColor: vars.color.primary,
    transform: "translateY(-1px)",
  },

  ":active": {
    transform: "translateY(3px)",
  },
});

export const fileInputLabelIcon = style({
  marginRight: "0.6rem",
  color: vars.color.primary,
});

export const inputFilePreview = style({
  position: "relative",
  margin: "0 0.4rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "3rem",
  color: vars.color.primary
});

export const inputFilePreviewName = style({
  marginTop: "0.4rem",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontFamily: vars.font.body,
  fontSize: "0.8rem",
});

export const inputFilesPreview = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: "1rem",
  minHeight: "5rem",
  padding: "1rem",
  width: "20rem",
});

export const removeIcon = style({
  position: "absolute",
  top: "-10px",
  right: "-10px",

  cursor: "pointer",

  transition: "0.3s",

  ":hover": {
    transform: "translateY(-2px)",
  },

  ":active": {
    transform: "translateY(5px)",
  },
});
