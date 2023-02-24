/*
 * @FilePath: /Users/i104/vite3/src/utils/hooks/UseCountDown.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import { useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useCountDown = ({ defaultSeconds = 60, autoTrigger = false, callback }) => {
    const timer = useRef(null)
    const [second, setCountDownSecond] = useState(defaultSeconds)
    const [disabled, setDisabled] = useState(autoTrigger)

    const clear = useCallback(() => {
        setDisabled(false);
        setCountDownSecond(60);
        timer.current && clearTimeout(timer.current);
    }, [])

    /**
     * 倒计时函数
     * @param seconds
     */
    const countDown = useCallback((seconds) => {
        if (seconds > 0) {
            seconds--;
            setCountDownSecond(seconds);
            timer.current = setTimeout(() => countDown(seconds), 1000);
        } else {
            clear()
        }
    }, [clear])

    const handleCountDown = useCallback(() => {
        if (!disabled) {
            callback?.()
            setDisabled(true);
            let seconds = second;
            timer.current = setTimeout(() => countDown(seconds), 1000);
        } else {
            setDisabled(true);
            let seconds = second;
            timer.current = setTimeout(() => countDown(seconds), 1000);
        }
    }, [disabled, second, countDown, callback]);

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, [])

    useEffect(() => {
        autoTrigger && handleCountDown()
    }, [autoTrigger])

    return [disabled, second, handleCountDown, clear]
};

useCountDown.propTypes = {
    defaultSeconds: PropTypes.number,
    autoTrigger: PropTypes.bool,
    callback: PropTypes.func
}

export default useCountDown
