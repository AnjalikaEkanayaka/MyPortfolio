import React from 'react'
import './Footer.css'
// import footer_logo from '../../Assets/footer_logo.png'
import user_icon from '../../Assets/user_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="" /> */}
          <p> I am a front end developer from,..............</p>
        </div>
      </div>
      <div className="footer-top-right">
        <div className="footer-email-input">
          <img src={user_icon} alt="" />
          <input type="email" placeholder='Enter Your Email' />
        </div>
        <div className="footer-subscribe">Subscribe</div>
      </div>
    </div>
    
  )
}

export default Footer