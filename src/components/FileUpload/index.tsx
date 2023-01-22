import React, { useState } from "react";
import { UploadedFile } from "../../App";
import { Button, Input } from "../../atoms";
import { uploadFile } from "../../clients";
import { content } from "../../common.css";

interface FileUploadProps {
  availableHashes: string[];
  onFileUpload: (spentHashes: string[], uploadedFile: UploadedFile) => void;
}

export const FileUpload = ({
  availableHashes,
  onFileUpload,
}: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>();

  const uploadFiles = async () => {
    if (!files?.[0]) return;
    const data = await uploadFile(files[0], availableHashes[0]);
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
