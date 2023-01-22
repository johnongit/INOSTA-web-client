import { style } from "@vanilla-extract/css";
import { centeredRow } from "../../common.css";

export const invoiceDisplay = style([
  centeredRow,
  {
    width: "100%",
    flexWrap: "wrap",
  },
]);
export const invoiceDisplayQRCode = style({ margin: "0 2rem" });
