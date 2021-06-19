import React,{useState} from 'react'
import './Navbar.css'

function Navbar(props) {
    const [list, setList] = useState([props])
    console.log(list);
    
    return (
        <div className="navbar">
            <img className="logo" src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="Netflix Logo" />
            {list.map((obj)=>
             <select className='dropdown' name="cars" id="cars">
                    <option value="volvo" disabled>Genre</option>
                    <option>{obj.title}</option>
            </select> )}

            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
        </div>
    )
}

export default Navbar
