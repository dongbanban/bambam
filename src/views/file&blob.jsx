/*
 * @FilePath: /Users/i104/vite3/src/views/file&blob.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import React, { useCallback, useState } from 'react'
import { fileConvert } from 'utils/file'

const FileAndBlob = () => {
    const [url, setUrl] = useState(null)
    const handleFileChange = useCallback((e) => {
        Array.of(...e.target.files).forEach(file => {
            fileConvert({ file, convertType: 'base64', callback: result => setUrl(result) })
            fileConvert({ file, convertType: 'blob', callback: result => console.log(result) })
        })
    }, [])
    return (
        <>
            {url && <img src={url} style={{ width: 200 }} />}
            <input type='file' multiple onChange={handleFileChange} />
        </>
    )
}

export default FileAndBlob
