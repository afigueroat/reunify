import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CalendarApp from './components/CalendarApp'
import Header from './components/Header'
import Home from './components/Home'
import EventPage from './EventPage'
import { AuthProvider } from './AuthContext'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<EventPage />} />
          <Route path="/Calendar" element={<CalendarApp />} />
          {/* Add more Route components as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
