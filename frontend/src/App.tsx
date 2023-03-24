import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import EventPage from './EventPage'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<EventPage />} />
        {/* Add more Route components as needed */}
      </Routes>
    </Router>
  )
}

export default App
