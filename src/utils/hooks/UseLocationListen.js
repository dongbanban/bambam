/*
 * @FilePath: /Users/i104/bambam/src/utils/hooks/useLocationListen.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useLocationListen = listener => {
    let location = useLocation();
    useEffect(() => {
        listener?.(location);
    }, [location, listener]);
}

export default useLocationListen