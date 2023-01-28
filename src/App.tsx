import React, { useEffect, useState } from "react";
import { uniq } from "lodash";
import {
  container,
  contentContainer,
  header,
  mainTitle,
  paymentAndUpload,
} from "./App.css";
import { checkInvoicePaymentStatus, getInvoice, InvoiceData } from "./clients";
import { text } from "./common.css";
import { LightningInvoice } from "./components/LightningInvoice";
import { FileUpload } from "./components/FileUpload";
import {
  STORAGE_CURRENT_INVOICE_DATA_KEY,
  STORAGE_HASH_KEY,
  STORAGE_UPLOADED_FILES_KEY,
} from "./constants";
import { useStorageItem } from "./hooks/storage";
import { UploadedFiles } from "./components";
import { decode } from "light-bolt11-decoder";



export interface UploadedFile {
  name: File["name"];
  type: File["type"];
  url: string;
}

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [invoiceData, setInvoiceData] = useStorageItem<InvoiceData>(
    STORAGE_CURRENT_INVOICE_DATA_KEY
  );
  const [showFileUploadInput, setShowFileUploadInput] = useState(false);

  const [availableHashes, setAvailableHashes] = useStorageItem<string[]>(
    STORAGE_HASH_KEY,
    []
  );
  const [uploadedFiles, setUploadedFiles] = useStorageItem<UploadedFile[]>(
    STORAGE_UPLOADED_FILES_KEY,
    []
  );
  
  // check if invoice is expired
  const checkInvoiceExpiration = () => {
    const invoiceData: string = localStorage.getItem(STORAGE_CURRENT_INVOICE_DATA_KEY) || "";
    if (!invoiceData) return false;
    const paymentRequest = JSON.parse(invoiceData).payment_request;
    const decodedInvoiceData = decode(paymentRequest);
    const sections = decodedInvoiceData.sections;
    const expiry = sections.filter((section: { name: string; }) => section.name === "expiry")[0].value;
    const timestamp = sections.filter((section: { name: string;}) => section.name === "timestamp")[0].value;
    const expiredInvoiceDate = new Date((timestamp + expiry) * 1000);
    if (expiredInvoiceDate < new Date()) {
      console.log("invoice is expired");
      return true;
    }
    return false;
  };

  const fetchNewInvoice = () => {
    setIsLoading(true);
    getInvoice().then((result) => {
      if (result) setInvoiceData(result);
      setIsLoading(false);
    });
  };

  // Check if invoice is expired each 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (checkInvoiceExpiration()) fetchNewInvoice();
    }, 10000);
  }, []);
  useEffect(() => {
    if (availableHashes?.length) {
      setShowFileUploadInput(true);
    } else {
      if (!invoiceData) fetchNewInvoice();
    }
  }, []);

  useEffect(() => {
    if (!invoiceData) return;

    const interval = setInterval(() => {
      checkInvoicePaymentStatus(invoiceData?.payment_hash).then((isPaid) => {
        if (!isPaid) return;

        setShowFileUploadInput(true);
        const newHash = [invoiceData.payment_hash];
        setAvailableHashes(newHash);

        clearInterval(interval);
        fetchNewInvoice();
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [invoiceData]);
  

  const onFileUpload = (spentHashes: string[], uploadedFile: UploadedFile) => {
    const newAvailableHashes = availableHashes.filter(
      (hashA) => !spentHashes.includes(hashA)
    );

    setAvailableHashes(newAvailableHashes);
    setUploadedFiles([...uploadedFiles, uploadedFile]);

    if (!newAvailableHashes.length) {
      setShowFileUploadInput(false);
    }
  };

  return (
    <div className={container}>
      <header className={header}>
        <h1 className={mainTitle}>INOSTA</h1>

        <img src="/logo.png" alt="logo" width="100" height="100" />
        <p className={text}>
          Welcome on INOSTA. Pay a Lightning Invoice to upload a file.
          You will then be able to use it on Nostr.{" "}
        </p>
      </header>

      <div className={contentContainer}>
        <div className={paymentAndUpload}>
          {showFileUploadInput ? (
            <FileUpload
              availableHashes={availableHashes}
              onFileUpload={onFileUpload}
            />
          ) : (
            <LightningInvoice invoiceData={invoiceData} isLoading={isLoading} />
          )}
        </div>

        <hr></hr>

        <UploadedFiles files={uploadedFiles} />
      </div>
    </div>
  );
};

export default App;
