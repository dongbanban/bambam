/*
 * @FilePath: /click/Users/i104/vite/src/utils/hooks/UseFirstMount.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import { useRef } from 'react';

/**
 * 判断是否是首次渲染
 * @returns {boolean}
 */
const useFirstMount = () => {
    const isFirst = useRef(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}

export default useFirstMount
