/*
 * @FilePath: /Users/i104/bambam/src/views/sharingan/item/eye.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React from 'react'

import classNames from 'classnames'

const SharinganEye = ({ children, className }) => {
    return (
        <div className={classNames('sharingan-eye', {
            [className]: className
        })}>
            {children}
        </div>
    )
}

export default SharinganEye