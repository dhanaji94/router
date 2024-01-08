import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className='main-nav'>
  
         <div className='logo'>
         <h1>
         <span>M</span>y
         <span>P</span>age
         </h1>
         </div>
    
        <div className='menu-link'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
            
         </ul>
        </div>

        <div className='social-media'>
         <ul>
         <li><a href="https://www.youtube.com/"> YouTube</a></li>
         <li><a href="https://www.facebook.com/">Facebook</a></li>
         <li><a href="https://www.google.com/">google</a></li>
         </ul>
        </div>
    </nav>
  
    </>
  )
}

export default Navbar;