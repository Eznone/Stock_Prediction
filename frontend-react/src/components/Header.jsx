import React from 'react'

const Header = () => {
  return (
    <nav className='navbar container pt-3 pb-3'>
        <a className="navbar-brand text-light text-accent" href="">Stock Prediction Portal</a>
    
        <div>
            <a className="btn btn-outline-ebffd8 " href="">Login</a>
            &nbsp;
            <a className="btn btn-fill-ebffd8" href="">Register</a>

        </div>

    </nav>
  )
}

export default Header