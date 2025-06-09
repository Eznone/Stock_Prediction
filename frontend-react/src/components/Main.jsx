import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Button from './Button.jsx'

const Main = () => {
  return (
    <>
    <div className='container'>
        <div className="p-5 text-center bg-light-dark">
            <h1 className="text-light text-accent">Stock Prediction Portal</h1>
            <p className='text-light text-offwhite lead'>
              This Stock Prediction Portal leverages historical market data, technical indicators and advanced machine learning algorithms to forecast short- and long-term price trends. With a Django-powered API for data processing and a React frontend for real-time visualization, it provides actionable insights to help you make smarter investment decisions.
            </p>
            <Button text="Login Now" class="btn-outline-ebffd8"/>
        </div>
    </div>
    </>
  )
}

export default Main