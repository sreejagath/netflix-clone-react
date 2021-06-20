import React from 'react'

import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import { scifi } from '../../urls'

function Scifi() {
    return (
        <div>
            <Banner/>
            <Rowpost url={scifi} title='Science Fiction'/>
    
        </div>
    )
}

export default Scifi