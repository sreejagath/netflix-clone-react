import React from 'react'
import './App.css'
import {Route,Link} from 'react-router-dom'
import Home from './Sections/Home/Home'
import Actionpage from './Sections/Home/Action'
import Crime from './Sections/Home/Crime'
import Horror from './Sections/Home/Horror'
import Orginals from './Sections/Home/Orginals'
import Drama from './Sections/Home/Drama'
import Romance from './Sections/Home/Romance'
import Scifi from './Sections/Home/Scifi'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import None from './Sections/Home/None'

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Route exact path='/'>
      <Home/>
      </Route>
      <Route path='/action'>
        <Actionpage/>
      </Route>
      <Route path='/crime'>
      <Crime/>
      </Route>
      <Route path='/horror'>
        <Horror/>
      </Route>
      <Route path='/nflixorginals'>
        <Orginals/>
      </Route>
      <Route path='/drama'>
        <Drama/>
      </Route>
      <Route path='/romance'>
        <Romance/>
      </Route>
      <Route path='/scifi'>
        <Scifi/>
      </Route>
      <Route path='/none'>
        <None/>
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
