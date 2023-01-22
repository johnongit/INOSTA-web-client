import React from "react";

import { QRCodeSVG } from "qrcode.react";
import { content, text } from "../../common.css";
import { InvoiceData } from "../../clients";

interface LightningInvoiceProps {
  invoiceData?: InvoiceData;
  isLoading: boolean;
}

export const LightningInvoice = ({
  invoiceData,
  isLoading,
}: LightningInvoiceProps) => {
  return (
    <div className={content}>
      <p className={text}>scan (or click) this qr code & pay the lightning invoice:</p>
      {isLoading ? (
        <div>loading...</div>
      ) : invoiceData ? (
        <a href={`lightning:` + invoiceData.payment_request}>
        <QRCodeSVG value={invoiceData.payment_request} />
        </a>
        
      ) : (
        <div>could not generate invoice, please retry later</div>
      )}
    </div>
  );
};
