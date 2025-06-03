import React from 'react'

const Footer = () => {
  return (
    <footer className='footer py-3 my-3'>
        <hr className="border-bottom"/>
        <p className="text-center text-light text-offwhite">
            &copy; {new Date().getFullYear()} Stock Prediction Portal. All rights reserved.
            <br />
        </p>
    </footer>
  )
}

export default Footer