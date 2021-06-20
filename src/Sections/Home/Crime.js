import React from 'react'

import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import { crime } from '../../urls'

function Crime() {
    return (
        <div>
            <Banner/>
            <Rowpost url={crime} title='Crime'/>
            
        </div>
    )
}

export default Crime
