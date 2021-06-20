import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import Footer from '../../Components/Footer/Footer'
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