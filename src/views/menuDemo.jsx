/*
 * @FilePath: /Users/i104/bambam/src/views/menuDemo.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React, { useMemo, useState } from 'react'
import { Flex } from 'antd'
import './menuDemo.less'

function MenuTest() {
    const [menuKey, setKey] = useState(null)
    const menuEl = useMemo(() => {
        return new Array(7).fill('menu').map((item, index) => {
            return <Flex className={`item${index === menuKey ? ' active-item' : ''}`} justify='center' align='center' onClick={() => setKey(index)}>
                <div className={`menu-item${index === menuKey ? ' active-menu' : ''}${index === 0 ? ' isFirst' : ''}${index === 6 ? ' isLast' : ''}`}>{item + ' ' + index}</div>
            </Flex>
        })
    }, [menuKey])
    return (
        <Flex className='left' gap={0} horizontal>
            <Flex gap={0} vertical>
                {menuEl}
            </Flex>
            <Flex className='right' justify='center' align='center' flex={1}>222</Flex>
        </Flex>
    )
}

export default MenuTest
