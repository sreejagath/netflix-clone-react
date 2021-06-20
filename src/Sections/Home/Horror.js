import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import Footer from '../../Components/Footer/Footer'
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