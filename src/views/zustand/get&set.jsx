/*
 * @FilePath: /click/Users/i104/vite3/src/views/zustand/get&set.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import React, { useEffect } from 'react'
import { Button, Space } from 'antd'

// store
import { useDemoStore } from 'stores'

const GetSet = () => {
    const { value1, setValue, getState, reset } = useDemoStore(); // useDemoStore()不能在hook中使用

    useEffect(() => {
        console.log(useDemoStore.getState()) // 获取所有state
        useDemoStore.setState({ value1: 'newValue' }) // 增量形式更新state
    }, [])

    useEffect(() => {
        console.log(getState()) // 获取所有state
    }, [getState])

    return (
        <Space>
            <Button onClick={() => setValue('value1', Math.random())}>setValue1</Button>
            <Button onClick={() => setValue('value2', Math.random())}>setValue2</Button>
            <Button onClick={() => console.log(getState())}>getValue</Button>
            <Button onClick={reset}>reset</Button>
            {value1}
        </Space>
    )
}

export default GetSet
