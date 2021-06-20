import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import Footer from '../../Components/Footer/Footer'
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
