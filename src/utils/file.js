/*
 * @FilePath: /Users/i104/vite3/src/utils/file.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { isFile, isBlob } from './util'
/**
 * @description: file对象转base64/blob
 * @param {*} file
 * @param {*} convertType
 * @param {*} callback
 * @return {*}
 */
const fileConvert = ({ file, convertType = 'base64', callback }) => {
    if (!isFile(file)) {
        throw new Error('Please convert file')
    }
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function () {
        const base64 = this.result
        if (convertType.toLowerCase() === 'blob') {
            const blob = new Blob([this.result], { type: file.type });
            return callback?.(blob)
        }
        return callback?.(base64)
    }
}

/**
 * @description: 下载非url形式的文件
 * @param {*} data
 * @param {*} fileName
 * @return {*}
 */
const download = ({ data, fileName = 'default.png' }) => {
    if (!isFile(data) && !isBlob(data)) {
        throw new Error('Error data type to download')
    }
    const blobUrl = URL.createObjectURL(data)
    const downloadEl = document.createElement('a');
    document.body.appendChild(downloadEl);
    downloadEl.style.display = 'none';
    downloadEl.href = blobUrl;
    downloadEl.download = fileName;
    downloadEl.click();
    document.body.removeChild(downloadEl);
    URL.revokeObjectURL(blobUrl);
}

/**
 * @description: 下载url形式的文件
 * @param {*} url
 * @return {*}
 */
const downloadByUrl = url => {
    if (!url) {
        return
    }
    const downloadEl = document.createElement('a');
    document.body.appendChild(downloadEl);
    downloadEl.style.display = 'none';
    downloadEl.href = url;
    downloadEl.click();
    document.body.removeChild(downloadEl);
}

/**
 * @description: 字节转-->KB/MB/G/T
 * @param {*} size
 * @return {*}
 */
const getFileSize = size => {
    if (!size) return '-';
    const num = 1024.00;
    const newSize = Number(size);
    if (newSize < num) { return `${newSize}B`; }
    if (newSize < num ** 2) { return `${(newSize / num).toFixed(2)}KB`; } // KB
    if (newSize < num ** 3) { return `${(newSize / num ** 2).toFixed(2)}MB`; } // MB
    if (newSize < num ** 4) { return `${(newSize / num ** 3).toFixed(2)}G`; } // G
    return `${(newSize / num ** 4).toFixed(2)}T`; // T
};

export {
    fileConvert,
    download,
    getFileSize,
    downloadByUrl
}