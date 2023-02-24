/*
 * @FilePath: /click/Users/i104/vite/src/utils/hooks/UseUpdateEffect.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */


import { useEffect } from 'react';
import useFirstMount from './UseFirstMount';

/**
 * 非首次渲染的useEffect
 * @param effect
 * @param deps
 */
const useUpdateEffect = (effect, deps) => {
    const isFirstMount = useFirstMount();

    useEffect(() => {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};

export default useUpdateEffect;