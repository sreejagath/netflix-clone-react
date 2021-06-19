import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Rowpost from './Components/Rowpost/Rowpost'
import {action,crime,drama,horror,originals,romance,scifi} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar 
     url={action,drama,crime} title={['Action','Drama','Crime']}>
      </Navbar>
      <Banner/>
      <Rowpost url={originals} title='Netflix Orginals'/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={drama} title='Drama' isSmall/>
      <Rowpost url={crime} title='Crime' isSmall/>
      <Rowpost url={horror} title='Horror' isSmall/>
      <Rowpost url={romance} title='Romance' isSmall/>
      <Rowpost url={scifi} title='Science Fiction' isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
