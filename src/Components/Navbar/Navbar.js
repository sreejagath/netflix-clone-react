import React,{useState} from 'react'
import './Navbar.css'
import Select from 'react-select';

function Navbar() {
    
    // const genre = props.title;
    // console.log(genre);
    // const listItems = genre.map((myList) =>  
    // <li>{myList}</li>  
//   ); 
//   const n=listItems.length
//   console.log(n);

    return (
        <div className="navbar">
            <img className="logo" src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="Netflix Logo" />
            

            
             <select className='dropdown' name="dropdown" id="dropdown">
             
                    <option value="genre" disabled>Genre</option>
                    
                          <option>Netflix Orginals</option>
                          <option>Action</option>
                          <option>Drama</option>
                          <option value="">Crime</option>
                          <option value="">Horror</option>
                          <option value="">Romance</option>
                          <option value="">Science Fiction</option>
            </select>
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
        </div>
    )
}

export default Navbar
