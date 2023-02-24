/*
 * @FilePath: /click/Users/i104/vite/src/utils/hooks/UseMount.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import { useEffect } from 'react';

/**
 * 首次渲染
 */
const useMount = fn => {
    useEffect(() => {
        fn?.();
    }, []);
};

export default useMount
