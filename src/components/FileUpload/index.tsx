import React, { useState } from "react";
import { UploadedFile } from "../../App";
import { Button, Input } from "../../atoms";
import { uploadFile } from "../../clients";
import { content } from "../../common.css";
import { fromBlob } from "image-resize-compress";

interface FileUploadProps {
  availableHashes: string[];
  onFileUpload: (spentHashes: string[], uploadedFile: UploadedFile) => void;
}

const resizeFile = (file: File, type: string) => {
  const fileResized = fromBlob(file, 60, 2000, 2000, type)
  .then((blob) => {
    return new File([blob], file.name, {type: file.type});
  });
  return fileResized;
};

// check image size. Return true if size is more than 3Mo
const checkSize = (file: File) => {
  console.log("file size", file.size / 1024 / 1024);
  const size = file.size / 1024 / 1024;
  return size > 3;
};

export const FileUpload = ({
  availableHashes,
  onFileUpload,
}: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>();

  const uploadFiles = async () => {
    if (!files?.[0]) return;
    // resize image if size is more than 7Mo
    //const file: File = checkSize(files[0]) ? await resizeFile(files[0], files[0].type.split("/")[1]) : files[0];
    let file: File = files[0];
    if (checkSize(files[0])) {
      file = await resizeFile(files[0], files[0].type.split("/")[1]);
    }
    const data = await uploadFile(file, availableHashes[0]);
    if (data?.success)
      onFileUpload([availableHashes[0]], {
        name: files[0].name,
        type: files[0].type,
        url: data.url,
      });
  };

  return (
    <div className={content}>
      <Input
        onFileChange={setFiles}
        type="file"
        accept=".png, .jpeg, .jpg, .svg"
      />
      <Button onClick={uploadFiles} disabled={!files?.length}>
        Upload
      </Button>
      <div>You have {availableHashes.length} hashes remaining</div>
    </div>
  );
};
