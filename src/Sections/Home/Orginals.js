import React from 'react'

import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import { originals } from '../../urls'

function Orginals() {
    return (
        <div>
            <Banner/>
            <Rowpost url={originals} title='Netflix Orginals'/>
            
        </div>
    )
}

export default Orginals