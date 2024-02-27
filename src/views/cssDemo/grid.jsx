/*
 * @FilePath: /Users/i104/bambam/src/views/cssDemo/grid.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React from 'react'

import './grid.less'

const Grid = () => {
    return (
        <div class="grid_container">
            <div class="item item_a">
                1fr
            </div>
            <div class="item item_b">
                3fr
            </div>
            <div class="item item_c">
                1fr
            </div>
            <div class="item item_d">
                1fr
            </div>
            <div class="item item_e">
                2fr
            </div>
            <div class="item item_f">
                2fr
            </div>
            <div class="item item_g">
                2fr
            </div>
        </div>
    )
}

export default Grid