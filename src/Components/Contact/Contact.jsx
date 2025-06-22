import React from 'react'
import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.jpg'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.png'
import email_icon from '../../assets/email_icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I am currently available............</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email_icon} alt="" />
                        <p>anjalika.jke@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>0701429877</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>University of Jaffna..............</p>
                    </div>
                </div>
            </div>
            <form action="" className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="10" placeholder='Enter Your Message'></textarea>
                <button type = "submit" className="contact-submit">Submit Now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact