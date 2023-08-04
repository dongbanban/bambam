/*
 * @FilePath: /Users/i104/bambam/src/utils/hooks/UseWhirl.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React, { useEffect, useRef } from 'react';
import { registerEvent, removeEvent } from '../CustomEvent'

const useWhirl = ({ id }) => {
    const eyeRef = useRef(null)
    const whirl = () => {
        if (eyeRef.current && !Array.from(eyeRef.current.classList).includes('sharingan-whirl')) {
            eyeRef.current.classList.add('sharingan-whirl')
            setTimeout(() => {
                eyeRef.current.classList.remove('sharingan-whirl')
            }, 1000)
        }
    }

    useEffect(() => {
        eyeRef.current = document.getElementById(id)
        registerEvent(document, 'click', whirl)
        // registerEvent(document, 'mousemove', whirl)
        return () => {
            removeEvent(document, 'click')
            // removeEvent(document, 'mousemove')
        }
    }, [])

    return { whirl }
}

export default useWhirl