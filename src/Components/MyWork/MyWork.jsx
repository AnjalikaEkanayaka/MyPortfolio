import React from 'react'
import './MyWork.css'
import MyWork_data from '../../assets/mywork_data.js'
// import theme_pattern from '../../assets/theme_pattern.jpg'
import arrow_icon from '../../assets/arrow_icon.png'

const MyWork = () => {
    return (
        <div className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="mywork-container">
                {MyWork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="mywork_showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork