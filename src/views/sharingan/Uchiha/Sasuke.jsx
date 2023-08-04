/*
 * @FilePath: /Users/i104/bambam/src/views/sharingan/Uchiha/Sasuke.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React from 'react'
import { Space } from 'antd'
import SharinganEyelids from '../item/eyelids'
import SharinganEye from '../item/eye'
import Magatama from '../item/magatama'
import { useWhirl } from 'utils/hooks'

const SasukeEye = () => {
    useWhirl({ ids: ['Magatama', 'kaleidoscope', 'kaleidoscope_eternal'] })

    return (
        <Space>
            <SharinganEyelids>
                <SharinganEye id='Magatama'>
                    <div className='sharingan-circle-line'></div>
                    <div className='sharingan-pupil'></div>
                    <Magatama className='sharingan-magatama-top' />
                    <Magatama className='sharingan-magatama-left' />
                    <Magatama className='sharingan-magatama-right' />
                </SharinganEye>
            </SharinganEyelids>

            <SharinganEyelids>
                <SharinganEye id='kaleidoscope' style={{ background: 'black' }}>
                    <div className='sharingan-pupil'></div>
                    <div className='sharingan-kaleidoscope' style={{ transform: 'rotate(-55deg)' }}></div>
                    <div className='sharingan-kaleidoscope-fill1'></div>
                    <div className='sharingan-kaleidoscope'></div>
                    <div className='sharingan-kaleidoscope' style={{ transform: 'rotate(55deg)' }}></div>
                    <div className='sharingan-kaleidoscope-fill2'></div>
                </SharinganEye>
            </SharinganEyelids>

            <SharinganEyelids>
                <SharinganEye id='kaleidoscope_eternal' style={{ background: 'black' }}>
                    <div className='sharingan-pupil eternal'></div>
                    <div className='sharingan-kaleidoscope' style={{ transform: 'rotate(-55deg)' }}></div>
                    <div className='sharingan-kaleidoscope-fill1'></div>
                    <div className='sharingan-kaleidoscope'></div>
                    <div className='sharingan-kaleidoscope' style={{ transform: 'rotate(55deg)' }}></div>
                    <div className='sharingan-kaleidoscope-fill2'></div>

                    <div className='sharingan-kaleidoscope-eternal' style={{ transform: 'rotate(-55deg)' }}></div>
                    <div className='sharingan-kaleidoscope-eternal' style={{ transform: 'rotate(180deg)' }}></div>
                    <div className='sharingan-kaleidoscope-eternal' style={{ transform: 'rotate(55deg)' }}></div>
                </SharinganEye>
            </SharinganEyelids>
        </Space>
    )
}

export default SasukeEye