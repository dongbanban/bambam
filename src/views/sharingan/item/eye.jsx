/*
 * @FilePath: /Users/i104/bambam/src/views/sharingan/item/eye.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React from 'react'

import classNames from 'classnames'

const SharinganEye = ({ children, className, id }) => {
    return (
        <div id={id} className={classNames('sharingan-eye', {
            [className]: className
        })}>
            {children}
        </div>
    )
}

export default SharinganEye