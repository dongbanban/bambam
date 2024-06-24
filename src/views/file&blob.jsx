/*
 * @FilePath: /src/views/file&blob.jsx
 * @author: dongyang
 */
import React, { useCallback, useState } from "react";
import { fileConvert } from "utils/file";

const FileAndBlob = () => {
  const [url, setUrl] = useState(null);
  const handleFileChange = useCallback((e) => {
    Array.of(...e.target.files).forEach((file) => {
      fileConvert({
        file,
        convertType: "base64",
        callback: (result) => setUrl(result),
      });
      fileConvert({
        file,
        convertType: "blob",
        callback: (result) => console.log(result),
      });
    });
  }, []);

  const blobUrl = URL.createObjectURL(res.data); // responseType: 'blob'
  const base64Url = Buffer.from(res.data, "binary").toString("base64"); // responseType: 'arraybuffer'

  return (
    <>
      {url && <img src={url} style={{ width: 200 }} />}
      <input type="file" multiple onChange={handleFileChange} />
    </>
  );
};

export default FileAndBlob;
