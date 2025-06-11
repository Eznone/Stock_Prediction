import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    //console.log("test");

    const userData = {
      username,
      email,
      password,
    };
    //console.log(userData);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/register/',
        userData
      );
      console.log('response.data: ', response.data);
      console.log('Registration successful!');
      setErrors({}); // Clear errors on successful registration
      setSuccess(true);
    } catch (error) {
      setErrors(error.response.data);
      console.error(
        'There was an error registering the user: ',
        error.response.data
      );
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-blue p-5 rounded shadow-lg">
          <h3 className="text-light text-accent text-center mb-2">
            Create an Account
          </h3>
          <form onSubmit={handleRegistration}>
            <div className="mb-2">
              <input
                id="username"
                name="username"
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <small className="text-danger">{errors.username[0]}</small>
              )}
            </div>
            <div className="mb-2">
              <input
                id="email"
                name="email"
                type="email"
                className="form-control mb-2"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <small className="text-danger">{errors.email[0]}</small>
              )}
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Set password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <small className="text-danger">{errors.password[0]}</small>
              )}
            </div>
            {success && (
              <div className="alert alert-success mt-2" role="alert">
                Successfully Registered!
              </div>
            )}
            <button
              type="submit"
              className=" mt-4 btn btn-fill-ebffd8 d-block mx-auto">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
