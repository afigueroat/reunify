import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import EventForm from './EventsForm'
import LoginPage from './LoginPage'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Events" element={<EventForm />} />
        {/* Add more Route components as needed */}
      </Routes>
    </Router>
  )
}

export default App
