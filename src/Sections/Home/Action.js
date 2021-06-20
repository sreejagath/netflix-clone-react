import React from 'react'

import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import { action } from '../../urls'
function Actionpage() {
    return (
        <div>
           
            <Banner/>
            <Rowpost url={action} title='Action'/>
            
        </div>
    )
}

export default Actionpage
