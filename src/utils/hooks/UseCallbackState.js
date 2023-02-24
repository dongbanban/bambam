/*
 * @FilePath: /click/Users/i104/vite/src/utils/hooks/UseCallbackState.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import { useRef, useState, useEffect } from 'react';

/**
 * 带 callback 的 useState
 * @param initialState
 * @returns {unknown[]}
 */
export default function useCallbackState(initialState) {

    const cbRef = useRef(),
        [data, setData] = useState(initialState);

    useEffect(() => {
        cbRef?.current?.(data);
    }, [
        data
    ]);

    return [data, function (d, callback) {
        cbRef.current = callback;
        setData(d);
    }];

}
