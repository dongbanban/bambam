/*
 * @FilePath: /click/Users/i104/vite3/src/views/requestQueue.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import React, { useEffect } from 'react'
import RequestQueue from 'utils/requestQueue'

const Queue = () => {
    useEffect(() => {
        const queue = new RequestQueue()
        for (let i = 0; i < 1; i++) {
            queue.request({
                timeout: (i + 1) * 100,
                url: `test${i}`,
                name: `name${i}`,
                reAxiosCount: 0,
                maxReAxiosCount: 3,
                reAxiosCb: result => { console.log({ result }) }
            }).then().catch(err => console.log(err))
        }
    }, [])

    return (
        <div>Check the console</div>
    )
}

export default Queue


