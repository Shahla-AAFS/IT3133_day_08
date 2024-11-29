import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  {
  const [username, setUsername] = useState({username:"",password:"",error:""})
  //const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()
  const getTextInput=(e)=>{
    const{name,value}=e.target;
    setUsername((prevUser)=>({
      ...prevUser,[name]:value,
    }))
  }

  
  return (
  
    <div className="auth-container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        /> <br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        /><br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
