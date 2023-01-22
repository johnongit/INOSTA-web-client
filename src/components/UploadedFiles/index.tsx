import React from "react";
import { UploadedFile } from "../../App";
import {
  caption,
  container,
  firstCell,
  secondCell,
  thirdCell,
} from "./index.css";

interface UploadedFilesProps {
  files: UploadedFile[];
}
export const UploadedFiles = ({ files }: UploadedFilesProps) => {
  return (
    <table className={container}>
      <caption className={caption}>Latest uploaded files</caption>
      <tbody>
        {files.map(({ name, type, url }) => (
          <tr key={url}>
            <td className={firstCell}>{name}</td>
            <td className={secondCell}>{type}</td>
            <td className={thirdCell}>
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
