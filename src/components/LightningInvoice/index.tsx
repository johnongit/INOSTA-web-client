import React from "react";

import { QRCodeSVG } from "qrcode.react";
import { content, text } from "../../common.css";
import { InvoiceData } from "../../clients";
import { Button } from "../../atoms";
import { invoiceDisplay, invoiceDisplayQRCode } from "./index.css";

interface LightningInvoiceProps {
  invoiceData?: InvoiceData;
  isLoading: boolean;
}

export const LightningInvoice = ({
  invoiceData,
  isLoading,
}: LightningInvoiceProps) => {
  const copyInvoive = () => {
    if (invoiceData) navigator.clipboard.writeText(invoiceData.payment_request);
  };

  return (
    <div className={content}>
      <p className={text}>
        scan/copy this qr code & pay the lightning invoice:
      </p>
      {isLoading ? (
        <div>loading...</div>
      ) : invoiceData ? (
        <div className={invoiceDisplay}>
          <QRCodeSVG
            className={invoiceDisplayQRCode}
            value={invoiceData.payment_request}
          />

          <Button onClick={copyInvoive}>Copy</Button>
          <a href={"lightning:" + invoiceData.payment_request}><Button>Pay with wallet/alby</Button></a>
          
          
        </div>
      ) : (
        <div>could not generate invoice, please retry later</div>
      )}
    </div>
  );
};
