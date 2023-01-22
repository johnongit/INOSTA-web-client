import { style } from "@vanilla-extract/css";
import { vars } from "../../themes.css";

export const container = style({
  position: "relative",
  width: "30rem",
  maxWidth: "90vw",
  margin: "2rem auto",
  verticalAlign: "middle",
  fontFamily: vars.font.body,

  tableLayout: "fixed",
  borderCollapse: "collapse",
});

export const caption = style({
  marginBottom: "2rem",
  fontFamily: vars.font.title,
});

const tableCell = style({
  fontFamily: vars.font.body,
  padding: "0.4rem 1rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  borderBottomStyle: "solid",
  borderBottomWidth: "2px",
  borderBottomColor: vars.color.tertiary,
});

export const firstCell = style([tableCell, { width: "20%" }]);

export const secondCell = style([tableCell, { width: "20%" }]);

export const thirdCell = style([tableCell, { width: "60%" }]);
