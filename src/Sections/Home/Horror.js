import React from 'react'

import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import { horror } from '../../urls'

function Horror() {
    return (
        <div>
            <Banner/>
            <Rowpost url={horror} title='Horror'/>
           
        </div>
    )
}

export default Horror