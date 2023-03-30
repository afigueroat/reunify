import React, { useState } from 'react'
import RegisterPage from './RegisterPage'
import axios from 'axios'
import CustomModal from './components/Modal'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
  const { setLoggedIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showRegister, setShowRegister] = useState(false)
  const navigate = useNavigate()

  const handleClose = () => setShowRegister(false)
  const handleShow = () => setShowRegister(true)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/login', { email, password })
      localStorage.setItem('access_token', response.data.access_token)
      setLoggedIn(true) // Set loggedIn state to true
      navigate('/events')
    } catch (err) {
      const error =
        err instanceof Error ? err.message : 'An unknown error occurred'
      setErrorMessage(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {' '}
                Remember me{' '}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member?{' '}
            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault()
                handleShow()
              }}
            >
              Register
            </a>
          </p>
          <CustomModal
            showRegister={showRegister}
            handleClose={handleClose}
            title={'Register'}
          >
            <RegisterPage />
          </CustomModal>
          <p>or sign up with:</p>
          {/* Add the onClick event handlers for the social login buttons if needed */}
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  )
}

export default LoginPage
