import React from 'react'
import './Header.css'
import profile_img from '../../assets/profile_img.jpg'

const Header = () => {

  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveMenu(''); 
  };

  return (
    <div className='header'>
        <img src={profile_img} alt="" />
        <h1>I'm <span>Anjalika Ekanayaka</span></h1>
        <h2> Computer Enginnering student in University of Jaffna</h2>
        <p>Hello friends..................</p>
        <div className="header-action">
            <div className="header-connect" onClick={handleConnectClick}>Connect with Me</div>
            <div className="header-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Header