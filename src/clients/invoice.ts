import axios from "axios";
import { HOST } from "../constants";

export interface Response<D> {
  data: D;
}

export interface InvoiceData {
  message: string;
  payment_hash: string;
  payment_request: string;
  success: boolean;
}

export const getInvoice = async (): Promise<InvoiceData | null> => {
  try {
    const url = `${HOST}/getInvoice`;
    const result: Response<InvoiceData> = await axios.get(url);

    return result.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

interface CheckInvoicePaymentStatusData {
  message: string;
  success: boolean;
}

export const checkInvoicePaymentStatus = async (paymentHash: string) => {
  try {
    const url = `${HOST}/getSignedUrl`;

    const result: Response<CheckInvoicePaymentStatusData> = await axios.post(
      url,
      {
        "payment-hash": paymentHash,
      }
    );

    return result.data.success;
  } catch (err) {
    console.error(err);
    return null;
  }
};
