import { style } from "@vanilla-extract/css";
import { centeredRow, centered } from "../../common.css";


export const invoiceDisplay = style([
  centeredRow,
  {
    width: "max-content",
    maxWidth: "100%",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
]);

export const content = style({
  width: "max-content",
  maxWidth: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const /* A style that is applied to the `QRCode` component. */
invoiceDisplayQRCode = style({ margin: "1rem 2rem" });
