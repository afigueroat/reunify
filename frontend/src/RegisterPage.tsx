import React, { useState } from 'react'
import axios from 'axios'

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [otherInfo, setOtherInfo] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    otherInfo: '',
  })

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username || !password || !email) {
      setErrorMessage('Please fill out all required fields.')
      return
    }

    try {
      const response = await axios.post('/api/users', {
        username,
        password,
        email,
        phone,
        otherInfo,
      })

      if (response.status === 201) {
        setSuccessMessage('User created successfully.')
      } else {
        setErrorMessage('Error creating user.')
      }
    } catch (error) {
      setErrorMessage('Error creating user.')
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="otherInfo">Other Info</label>
          <textarea
            className="form-control"
            id="otherInfo"
            value={otherInfo}
            onChange={(e) => setOtherInfo(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  )
}

export default RegisterPage
