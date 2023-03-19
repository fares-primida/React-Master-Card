import React from 'react'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'
import './Style.scss'
import {Validationa} from './Schema'
import { useFormik } from 'formik'



const Project = () => {

        const formik = useFormik({
            initialValues: {
                charlodName: "",
                cardNumber: '',
                mM: '',
                yY: '',
                cVc: ''
            } ,
            validationSchema: Validationa,
            onSubmit: value => {
                alert(JSON.stringify(value , null , 2))
            }
        })

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
                                0112 412 2089 1124 1220 89
                            </h2>
                        </div>
                        <div className="name">
                            <div className="user">
                                <h4>
                                    Fares Yasser
                                </h4>
                            </div>
                            <div className="date">
                                <h5>
                                    09/00
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
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">CHARDHOLDER NAME</label>
                    <input 
                    id='name'
                    name='name'
                    type="text"
                    placeholder='Name'
                    onChange={formik.handleChange}
                    value={formik.values.charlodName}
                    onBlur={formik.handleBlur}
                    />
                    <label htmlFor="nubmer">CARD NUBMER</label>
                    <input 
                    id='nubmer'
                    name='number'
                    type="text"
                    placeholder='Name'
                    onChange={formik.handleChange}
                    value={formik.values.cardNumber}
                    onBlur={formik.handleBlur}
                    />
                    <div className="date">
                        <div className="input-1">
                            <label htmlFor="mm">MM</label>
                            <input 
                            id='mm'
                            type="text" 
                            name='mm'
                            placeholder='MM'
                            onChange={formik.handleChange}
                            value={formik.values.mM}
                            onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="input-2">
                        <label htmlFor="yy">YY</label>
                            <input 
                            id='yy'
                            name='yy'
                            type="text" 
                            placeholder='YY'
                            onChange={formik.handleChange}
                            value={formik.values.yY}
                            onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="input-3">
                        <label htmlFor="cvc">CVC</label>
                            <input 
                            id='cvc'
                            name='cvc'
                            type="text" 
                            placeholder='CVC'
                            onChange={formik.handleChange}
                            value={formik.values.cVc}
                            onBlur={formik.handleBlur}
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