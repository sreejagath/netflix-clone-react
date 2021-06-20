import React from 'react'

import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import { drama } from '../../urls'

function Drama() {
    return (
        <div>
            <Banner/>
            <Rowpost url={drama} title='Drama'/>
            
        </div>
    )
}

export default Drama
