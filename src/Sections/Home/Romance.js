import React from 'react'

import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import { romance } from '../../urls'

function Romance() {
    return (
        <div>
            <Banner/>
            <Rowpost url={romance} title='Romance'/>
            
        </div>
    )
}

export default Romance