import { useState } from 'react'
import './App.css'

import AuthPage from '../AuthPage/AuthPage';
import CustomDrawer from '../../mui.sample/CustomDrawer';
import CustomBottomNavigation from '../../mui.sample/CustomBottomNavigation';
import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import HomePage from '../HomePage/HomePage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {/* <NavBar /> */}
      <CustomDrawer />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ErrorBoundary>
      <CustomBottomNavigation />
      {
        (user) ?
          <ErrorBoundary>
            <Routes>
              <Route path="/bookings/new" element={<BookingPage />} />
            </Routes>
          </ErrorBoundary>
          :
          <ErrorBoundary>
            <AuthPage />
          </ErrorBoundary>
      }
    </main>
  )

}

export default App

