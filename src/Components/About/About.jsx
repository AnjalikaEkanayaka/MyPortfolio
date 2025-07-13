import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.jpg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>details </p>
                    <p>my passion.....</p>
                </div>
                <div className="about-skill">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Spring Boot</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div>
                    {/* <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"55%"}} /></div> */}
                </div>
            </div>
        </div>
        {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Years Of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Happy Clients</p>
            </div>
        </div> */}

    </div>
  )
}

export default About