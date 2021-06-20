import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import Footer from '../../Components/Footer/Footer'
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