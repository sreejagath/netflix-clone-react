import React,{useState} from 'react'
import './Navbar.css'

function Navbar(props) {
    const [glist, setglist] = useState([props.title])
    const [url,seturl] = useState([props.url])
    console.log(url);
    console.log("hi" ,glist);
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
            

            {glist.map((obj)=>
             <select className='dropdown' name="dropdown" id="dropdown">
             
                    <option value="genre" disabled>Genre</option>
                    
                          <option>{obj.[0]}</option>
                          <option>{obj.[1]}</option>
                          <option>{obj.[2]}</option>

                
            </select>
            )}

            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
        </div>
    )
}

export default Navbar
