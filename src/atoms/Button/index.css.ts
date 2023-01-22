import { style } from "@vanilla-extract/css";
import { vars } from "../../themes.css";

export const button = style({
  margin: "1rem 2rem",
  padding: "0.4rem 2rem",
  color: vars.color.primary,
  backgroundColor: vars.color.tertiary,

  fontFamily: vars.font.body,
  fontSize: vars.fontSize.body,

  borderRadius: "8px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: vars.color.tertiary,

  transitionDuration: "0.2s",
  cursor: "pointer",

  ":hover": {
    borderColor: vars.color.primary,
    transform: "translateY(-1px)",
  },

  ":active": {
    transform: "translateY(3px)",
  },

  ":disabled": {
    transform: "translateY(0)",
    cursor: "not-allowed",
    border: "none",
    filter: "grayscale(50%)"
  },
});
