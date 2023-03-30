import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CalendarApp from './pages/CalendarApp'
import Header from './components/Header'
import Home from './pages/Home'
import EventPage from './pages/EventPage'
import { AuthProvider } from './context/AuthContext'

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
