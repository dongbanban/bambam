/*
 * @FilePath: /Users/i104/bambam/src/views/sharingan/item/magatama.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React from 'react'

import classNames from 'classnames'

const Magatama = ({ className }) => {
    return (
        <div className={classNames('sharingan-magatama', {
            [className]: className
        })}></div>
    )
}

export default Magatama