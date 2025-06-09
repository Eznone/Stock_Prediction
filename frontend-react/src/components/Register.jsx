import React from 'react'

const Register = () => {
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-blue p-5 rounded shadow-lg">
                <h3 className="text-light text-accent text-center mb-2">Create an Account</h3>
                <form>
                    <input type="text" className="form-control mb-2" placeholder="Username"/>
                    <input type="email" className="form-control mb-2" placeholder="Email address"/>
                    <input type="password" className="form-control mb-4" placeholder="Set password"/>
                    <button type="submit" className="btn btn-fill-ebffd8 d-block mx-auto">Register</button>
                </form>
            </div>    
        </div>

    </div>
  )
}

export default Register