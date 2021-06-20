import React from 'react'
import './Navbar.css'
import {Link,useHistory} from 'react-router-dom'

function Navbar() {
    const history = useHistory();
    function handleChange(value) {
        history.push(`/${value}`);
      }
    
    // const genre = props.title;
    // console.log(genre);
    // const listItems = genre.map((myList) =>  
    // <li>{myList}</li>  
//   ); 
//   const n=listItems.length
//   console.log(n);

    return (
        <div className="navbar">
            <Link to='/'>
            <img className="logo" src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="Netflix Logo" />
            </Link>
             <select onChange={event => handleChange(event.target.value)} className='dropdown' name="dropdown" id="dropdown">
                <option value="genre" disabled>Genre</option>
                          <option value="nflixorginals">Netflix Orginals</option>
                          <option value="action">Action</option>
                          <option value="drama">Drama</option>
                          <option value="crime">Crime</option>
                          <option value="horror">Horror</option>
                          <option value="romance">Romance</option>
                          <option value="scifi">Science Fiction</option>
            </select>
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
        </div>
    )
}

export default Navbar
