import React, { ChangeEvent, useState } from "react";
import {
  fileInput,
  fileInputLabel,
  fileInputLabelIcon,
  input,
  inputFilePreview,
  inputFilePreviewName,
  inputFilesPreview,
  removeIcon,
} from "./index.css";

import {
  FaFile,
  FaFileAlt,
  FaFileArchive,
  FaFileImage,
  FaFilePdf,
  FaFileUpload,
} from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onFileChange?: (files: File[]) => void;
}

const getFileIcon = (file: File) => {
  switch (file.type) {
    case "image/svg+xml":
    case "image/svg":
    case "image/jpeg":
    case "image/webp":
    case "image/png":
      return <FaFileImage size={50} />;
    case "application/zip":
      return <FaFileArchive size={50} />;
    case "application/pdf":
      return <FaFilePdf size={50} />;
    case "text/plain":
    case "text/calendar":
      return <FaFileAlt size={50} />;
    default:
      return <FaFile size={50} />;
  }
};

export const Input = (props: InputProps) => {
  const { type, multiple, onFileChange, ...rest } = props;
  const [files, setFiles] = useState<File[]>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === "file") {
      const newFiles = multiple
        ? [...(files || []), ...(e.target.files || [])]
        : e.target.files?.[0]
        ? [e.target.files[0]]
        : [];

      setFiles(newFiles);
      onFileChange?.(newFiles);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => {
      if (prev) {
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      }
    });
  };

  if (type === "file") {
    return (
      <>
        <div className={inputFilesPreview}>
          {files?.map((file, index) => (
            <div key={`${file.name}-${index}`} className={inputFilePreview}>
              <IoIosRemoveCircleOutline
                className={removeIcon}
                onClick={() => removeFile(index)}
              />
              {getFileIcon(file)}
              <div className={inputFilePreviewName}>{file.name}</div>
            </div>
          ))}
        </div>
        <label htmlFor="file-upload" className={fileInputLabel}>
          <FaFileUpload className={fileInputLabelIcon} /> Custom Upload
        </label>
        <input
          id="file-upload"
          type="file"
          className={fileInput}
          onChange={onChange}
          multiple={multiple}
          {...rest}
        />
      </>
    );
  }

  return <input className={input} type={type} {...rest}></input>;
};
