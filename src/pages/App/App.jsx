import { useState } from 'react'
import './App.css'

import CustomDrawerMenu from '../../components/MenuDrawer/CustomDrawerMenu';
import CustomDrawerLogin from '../../components/LoginDrawer/CustomDrawerLogin';
import CustomBottomNavigation from '../../components/CustomBottomNavigation/CustomBottomNavigation';
import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import HomePage from '../HomePage/HomePage';
import ArtworksPage from '../ArtworksPage/ArtworksPage';
import MapPage from '../MapPage/MapPage';
import ExperimentalPage from '../ExperimentalPage/ExperimentalPage';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [user, setUser] = useState(null);
  const [exhibitions, setExhibition] = useState([]);

  return (
    <main className="App" >
      <CssBaseline />
      <Box className="Header">
        <CustomDrawerMenu />
        <div>LOGO HERE</div>
        <CustomDrawerLogin />
      </Box>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage exhibitions={exhibitions} setExhibition={setExhibition} />} />
          <Route path="/artworks" element={<ArtworksPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/experimental" element={<ExperimentalPage />} />
        </Routes>
      </ErrorBoundary>
      <Box className="Footer">
        <CustomBottomNavigation />
      </Box>
    </main>
  )

}

export default App

