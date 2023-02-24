/*
 * @FilePath: /click/Users/i104/vite/src/utils/hooks/UseToggleState.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */


import { useCallback, useState } from 'react';

/**
 * 布尔值切换的useState
 * @param defaultValue
 * @returns {[]}
 */
const useToggleState = (defaultValue = false) => {
    const [state, setState] = useState(defaultValue)

    const toggle = useCallback(() => setState(c => !c), [])

    return [state, toggle]
};

export default useToggleState
