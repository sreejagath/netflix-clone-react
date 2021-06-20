import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import Footer from '../../Components/Footer/Footer'
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
