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
import MapPage2 from '../MapPage/MapPage2';
import ExperimentalPage from '../ExperimentalPage/ExperimentalPage';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <CssBaseline />
      <Box className="Header">
        <CustomDrawerMenu />
        <div>LOGO HERE</div>
        <CustomDrawerLogin />
      </Box>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artworks" element={<ArtworksPage />} />
          <Route path="/map" element={<MapPage />}>
          <Route path="/map/directions" element={<MapPage2 />} />
          ///map/directions?to=1234from=5678
          //get request, post to req.query  
          </Route>
          <Route path="/experimental" element={<ExperimentalPage />} />
        </Routes>
      </ErrorBoundary>
      <Box className="Footer">
        <CustomBottomNavigation />
      </Box>
    </>
  )

}

export default App

