import React from 'react'
import './Services.css'
// import theme_pattern from '../../assets/theme_pattern.jpg' 
import Services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="services-container">
            {Services_data.map((service,index) => {
                return <div key={index} className="services_format">
                    <h3>{service.s_id}</h3>
                    <h2>{service.s_title}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>

    </div>
  )
}

export default Services