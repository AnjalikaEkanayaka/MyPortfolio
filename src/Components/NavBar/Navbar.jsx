import React, { useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.png'

const Navbar = () =>{

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        {/* <img src={logo} alt="" /> */}
        <ul className='nav-menu'>
          <li>Home</li>
          <li>About Me</li>  
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>

{/* need to add a color or sometthiing
 to the menu item which is choosen now.
 Home-> Home-colored or underlined */}

    </div>
  )
}

export default Navbar

// const menuItems = ['Home', 'About Me', 'Services', 'Portfolio', 'Contact Me'];

// <ul className='nav-menu'>
//   {menuItems.map((item, index) => (
//     <li key={index}>{item}</li>
//   ))}
// </ul>
