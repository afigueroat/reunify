import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useAuth } from '../context/AuthContext'
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { isLoggedIn, setLoggedIn } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    setLoggedIn(false)
    navigate('/')
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt="Reunify logo" height="30" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {isLoggedIn && (
              <>
                <LinkContainer to="/events">
                  <Nav.Link>Event</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Calendar">
                  <Nav.Link>Calendar</Nav.Link>
                </LinkContainer>
                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
