import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
      setAuth(true)
      navigate('/dashboard') // Redirect to home page after successful login
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.')
      
    }
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
