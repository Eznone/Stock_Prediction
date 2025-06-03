import React from 'react'
import Button from './Button.jsx'

const Header = () => {
  return (
    /* align items start fixes error of header being to low */
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a className="navbar-brand text-light text-accent" href="">Stock Prediction Portal</a>
    
        <div>
            <Button text="Login" class="btn-outline-ebffd8"/>
            &nbsp;
            <Button text="Register" class="btn-fill-ebffd8"/>

        </div>

    </nav>
  )
}

export default Header