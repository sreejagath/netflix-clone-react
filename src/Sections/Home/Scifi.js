import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import Footer from '../../Components/Footer/Footer'
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