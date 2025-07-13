import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Me', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'My Work', id: 'mywork' },
    // { label: 'Contact Me', id: 'contact' },
  ];

  const handleMenuClick = (item) => {
    setActiveMenu(item.label); // highlight this one
    const section = document.getElementById(item.id); // find the section
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // scroll to it
    }
  };

  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveMenu(''); // optional: remove highlight from other nav items
  };

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeMenu === item.label ? 'active' : ''}
            onClick={() => handleMenuClick(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="nav-connect" onClick={handleConnectClick}>Connect With Me</div>
    </div>
  );
};

export default Navbar;
