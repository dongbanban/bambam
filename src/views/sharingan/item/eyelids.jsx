/*
 * @FilePath: /Users/i104/bambam/src/views/sharingan/item/eyelids.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React from 'react'

import classNames from 'classnames'

const SharinganEyelids = ({ children, className }) => {
    return (
        <div className={classNames('sharingan-eyelids', {
            [className]: className
        })}>
            {children}
        </div>
    )
}

export default SharinganEyelids