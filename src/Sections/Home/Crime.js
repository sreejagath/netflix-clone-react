import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import Footer from '../../Components/Footer/Footer'
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
