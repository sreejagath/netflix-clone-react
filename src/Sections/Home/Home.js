import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Rowpost from '../../Components/Rowpost/Rowpost'
import Footer from '../../Components/Footer/Footer'
import {action,crime,drama,horror,originals,romance,scifi} from '../../urls'

function Home() {
    return (
        <div>
            <Banner/>
            <Rowpost url={originals} title='Netflix Orginals'/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={drama} title='Drama' isSmall/>
      <Rowpost url={crime} title='Crime' isSmall/>
      <Rowpost url={horror} title='Horror' isSmall/>
      <Rowpost url={romance} title='Romance' isSmall/>
      <Rowpost url={scifi} title='Science Fiction' isSmall/>
      
        </div>
    )
}

export default Home
