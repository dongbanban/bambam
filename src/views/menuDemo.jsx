/*
 * @FilePath: /Users/i104/bambam/src/views/menuDemo.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React from 'react'
import { Flex } from 'antd'
import './menuDemo.less'

function MenuTest() {
    return (
        <Flex className='left' gap={0} horizontal>
            <Flex gap={0} vertical>
                <Flex className='item' justify='center' align='center'>
                    <div className='menu-item isFirst'>111</div>
                </Flex>
                <Flex className='item' justify='center' align='center'>
                    <div className='menu-item'>111</div>
                </Flex>
                <Flex className='item' justify='center' align='center'>
                    <div className='menu-item'>111</div>
                </Flex>
                <Flex className='item' justify='center' align='center'>
                    <div className='menu-item'>111</div>
                </Flex>
                <Flex className='item' justify='center' align='center'>
                    <div className='menu-item'>111</div>
                </Flex>
                <Flex className='item' justify='center' align='center'>
                    <div className='menu-item'>111</div>
                </Flex>
                <Flex className='item' justify='center' align='center'>
                    <div className='menu-item isLast'>111</div>
                </Flex>
            </Flex>
            <Flex className='right' justify='center' align='center' flex={1}>222</Flex>
        </Flex>
    )
}

export default MenuTest
