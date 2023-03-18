import React from 'react'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'
import './Style.css'

const Project = () => {
    return (
        <div className='project'>
            <div className="linearBack">
                <div className="frontCard">
                    <img src={Front} alt="" />
                </div>
                <div className="backCard">
                    <img src={Back} alt="" />
                </div>
            </div>
            <div className="whiteBack"></div>
        </div>
    )
}

export default Project