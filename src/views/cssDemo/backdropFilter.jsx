/*
 * @FilePath: /Users/i104/vite3/src/views/cssDemo/backdropFilter.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React, { useMemo, useState } from 'react'
import { InputNumber, Space } from 'antd'

import './backdropFilter.less'

const BackdropFilter = () => {
    const content = useMemo(() => 'content'.repeat(100), [])
    const [saturate, setSaturate] = useState(100)
    const [blur, setBlur] = useState(4)
    const [size, setSize] = useState(4)

    return (
        <Space>
            <div className='BackdropFilter-container'>
                <div className='header' style={{ backdropFilter: `saturate(${saturate}%) blur(${blur}px)` }}></div>
                <div className='content'>
                    {content}
                </div>
                <Space>
                    <InputNumber value={saturate} onChange={val => setSaturate(val)} />
                    <span>saturate 虚化区域颜色明暗度</span>
                </Space>
                <Space>
                    <InputNumber value={blur} onChange={val => setBlur(val)} />
                    <span>blur 毛玻璃效果</span>
                </Space>
            </div>

            <div className='BackdropFilter-container'>
                <div className='header' style={{
                    backgroundImage: `radial-gradient(transparent 5%, #fff 60%)`,
                    backgroundSize: `${size}px ${size}px`
                }}></div>
                <div className='content'>
                    {content}
                </div>
                <Space>
                    <InputNumber min={3} value={size} onChange={val => setSize(val)} />
                    <span>背景图尺寸</span>
                </Space>
            </div>
        </Space>
    )
}

export default BackdropFilter