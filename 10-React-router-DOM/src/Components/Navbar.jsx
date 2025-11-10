import React from 'react'
import { Link } from "React-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <h2>Muskan Shaikh</h2>
          <div className='navlinks'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </div>
      </div> 
  )
}

export default Navbar