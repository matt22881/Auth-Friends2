import React, { useState } from 'react';
import axios from 'axios';

const initialCredentials = {
  username: '',
  password: ''
}

const Login = () => {
  
  const [credentials, setCredentials] = useState(initialCredentials)
     
  const handleChange = e => {
    setCredentials({
        [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        window.location.href = "/AddFriend";;
      })
      .catch((err) => {
        console.log(err);
      });
  };


    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }


export default Login;