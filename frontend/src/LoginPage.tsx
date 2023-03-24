import React, { useState } from 'react'
import RegisterPage from './RegisterPage'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showRegister, setShowRegister] = useState(false)

  const handleClose = () => setShowRegister(false)
  const handleShow = () => setShowRegister(true)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/login', { email, password })
      // Save the access token to local storage or cookies
      localStorage.setItem('access_token', response.data.access_token)
      // Redirect the user to the dashboard or home page
      window.location.href = '/events'
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An unknown error occurred'
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
          <Modal show={showRegister} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RegisterPage />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
