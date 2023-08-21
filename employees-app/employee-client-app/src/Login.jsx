import React, { useState } from 'react';
import {Link, redirect, useNavigate} from 'react-router-dom';
import { login } from './services/auth.service.js';

const Login = () => {
  const navigate= useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    login(formData).then((data)=>{

      if(data.token){
        localStorage.setItem("token", data.token);
        navigate("/home");    
      }
    });

    
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
            <div className="card-footer">
                <p>Not a user ?</p>
                <Link to="/register">
                    Register
                    </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
