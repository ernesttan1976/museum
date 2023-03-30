import { useState } from 'react'
import './App.css'

import CustomDrawerMenu from '../../components/MenuDrawer/CustomDrawerMenu';
import CustomDrawerLogin from '../../components/LoginDrawer/CustomDrawerLogin';
import CustomBottomNavigation from '../../mui.sample/CustomBottomNavigation';
import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import HomePage from '../HomePage/HomePage';
import ArtworksPage from '../ArtworksPage/ArtworksPage';
import MapPage from '../MapPage/MapPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App" >
      {/* <NavBar /> */}
      <CustomDrawerMenu />
      <CustomDrawerLogin />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artworks" element={<ArtworksPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </ErrorBoundary>
      <CustomBottomNavigation />
    </main>
  )

}

export default App

