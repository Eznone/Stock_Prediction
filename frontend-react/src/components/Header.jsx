import React from 'react'
import Button from './Button.jsx'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    /* align items start fixes error of header being to low */
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className="navbar-brand text-light text-accent" to="/">Stock Prediction Portal</Link>
    
        <div>
            <Button text="Login" class="btn-outline-ebffd8" url="/login"/>
            &nbsp;
            <Button text="Register" class="btn-fill-ebffd8" url="/register"/>

        </div>

    </nav>
  )
}

export default Header