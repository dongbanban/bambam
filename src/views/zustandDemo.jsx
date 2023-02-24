/*
 * @FilePath: /click/Users/i104/vite3/src/views/zustandDemo.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import React from 'react'
import { Row } from 'antd'
import GetSet from './zustand/get&set'
import Shallow from './zustand/shallow'

const ZustandDemo = () => {
    return (
        <>
            <Row>
                <GetSet />
            </Row>
            <Row>
                <Shallow />
            </Row>
        </>
    )
}

export default ZustandDemo
