/*
 * @FilePath: /Users/i104/bambam/src/utils/hooks/UseWhirl.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React, { useEffect } from 'react';
import { registerEvent, removeEvent } from '../CustomEvent'

const useWhirl = ({ ids }) => {
    const whirl = () => {
        ids.forEach(id => {
            const eye = document.getElementById(id)
            if (eye && !Array.from(eye.classList).includes('sharingan-whirl')) {
                eye.classList.add('sharingan-whirl')
                setTimeout(() => {
                    eye.classList.remove('sharingan-whirl')
                }, 1000)
            }
        })

    }

    useEffect(() => {
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