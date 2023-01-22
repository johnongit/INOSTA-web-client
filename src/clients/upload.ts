import axios from "axios";
import { Response } from ".";
import { HOST } from "../constants";

interface CheckUploadedFileData {
  success: boolean;
  message: string;
  url: string;
}

export const uploadFile = async (
  file: File,
  paymentHash: string
): Promise<CheckUploadedFileData | null> => {
  try {
    const url = `${HOST}/checkUploadedFile?payment-hash=${paymentHash}`;

    const data = new FormData();
    data.append("file", file);

    const result: Response<CheckUploadedFileData> = await axios.post(url, data);

    return result.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
