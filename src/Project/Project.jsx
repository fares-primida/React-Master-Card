import React from 'react'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'
import './Style.scss'
import { useState } from 'react'



const Project = () => {

        const [name , setName] = useState('')
        const [number , setNumber] = useState(0)
        const [mm , setMM] = useState(0)
        const [yy , setYY] = useState(0)
        const [cvc , setCvc] = useState(0)

    return (
        <div className='project'>
            <div className="linearBack">
                <div className="frontCard">
                    <div className="container">
                        <div className="logo">
                            <div className="container">
                                <div className="Fill-Circle"></div>
                                <div className="Out-Circle"></div>
                            </div>
                        </div>
                        <div className="number">
                            <h2>
                                {number}
                            </h2>
                        </div>
                        <div className="name">
                            <div className="user">
                                <h4>
                                    {name}
                                </h4>
                            </div>
                            <div className="date">
                                <h5>
                                    {yy} / {mm}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <img src={Front} alt="" />
                </div>
                <div className="backCard">
                    <img src={Back} alt="" />
                </div>
            </div>
            <div className="whiteBack">
                <form>
                    <label htmlFor="name">CHARDHOLDER NAME</label>
                    <input 
                    id='name'
                    name='name'
                    type="text"
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="nubmer">CARD NUBMER</label>
                    <input 
                    id='nubmer'
                    name='number'
                    type="number"
                    placeholder='Name'
                    onChange={(e) => setNumber(e.target.value)}
                    max={20}
                    />
                    <div className="date">
                        <div className="input-1">
                            <label htmlFor="mm">MM</label>
                            <input 
                            id='mm'
                            type="number" 
                            name='mm'
                            placeholder='MM'
                            onChange={(e) => setYY(e.target.value)}
                            maxLength={2}
                            />
                        </div>
                        <div className="input-2">
                        <label htmlFor="yy">YY</label>
                            <input 
                            id='yy'
                            name='yy'
                            type="number" 
                            placeholder='YY'
                            onChange={(e) => setMM(e.target.value)}
                            maxLength={4}
                            />
                        </div>
                        <div className="input-3">
                        <label htmlFor="cvc">CVC</label>
                            <input 
                            id='cvc'
                            name='cvc'
                            type="number" 
                            placeholder='CVC'
                            onChange={(e) => setCvc(e.target.value)}
                            maxLength={3}
                            />
                        </div>
                    </div>
                    <button className="submitBtn">Confirm</button>
                </form>
            </div>
        </div>
    )
}

export default Project