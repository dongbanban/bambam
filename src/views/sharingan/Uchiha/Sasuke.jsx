/*
 * @FilePath: /Users/i104/bambam/src/views/sharingan/Uchiha/Sasuke.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React from 'react'
import SharinganEyelids from '../item/eyelids'
import SharinganEye from '../item/eye'
import Magatama from '../item/magatama'
import { useWhirl } from 'utils/hooks'

const SasukeEye = () => {
    const { whirl } = useWhirl({ id: 'SasukeEye' })

    return (
        <SharinganEyelids>
            <SharinganEye id='SasukeEye'>
                <div className='sharingan-circle-line'></div>
                <div className='sharingan-pupil'></div>
                <Magatama className='sharingan-magatama-top' />
                <Magatama className='sharingan-magatama-left' />
                <Magatama className='sharingan-magatama-right' />
            </SharinganEye>
        </SharinganEyelids>
    )
}

export default SasukeEye