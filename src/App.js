import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Rowpost from './Components/Rowpost/Rowpost'
import {action,originals} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Orginals'/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
