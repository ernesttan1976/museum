import { useState } from "react";
import "./App.css";

import CustomDrawerMenu from "../../components/MenuDrawer/CustomDrawerMenu";
import CustomDrawerLogin from "../../components/LoginDrawer/CustomDrawerLogin";
import CustomBottomNavigation from "../../components/CustomBottomNavigation/CustomBottomNavigation";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import HomePage from "../HomePage/HomePage";
import Login from "../AuthPage/LoginForm";
import ArtworksPage from "../ArtworksPage/ArtworksPage";
import ArtworksNew from "../ArtworksNew/ArtworksNew";
import ArtworkInfo from "../../components/ArtworkInfo/ArtworkInfo";
import ArtworksEditForm from "../ArtworksEditForm/ArtworksEditForm";
import MapPage from "../MapPage/MapPage";
import MapPage2 from "../MapPage/MapPage2";
import ExperimentalPage from "../ExperimentalPage/ExperimentalPage";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import ExhibitionPage from "../ExhibitionPage/ExhibitionPage";
import ExhibitionNew from "../ExhibitionNew/ExhibitionNew";
import ExhibitionUpdate from "../ExhibitionUpdate/ExhibitionUpdate"


function App() {
  const [user, setUser] = useState(null);
  const [exhibitions, setExhibition] = useState([]);

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
          <Route path="/login" element={<Login />} />
          <Route path="/artworks" element={<ArtworksPage/>} />
          <Route path="/artworks/new" element={<ArtworksNew />} />
          <Route path="/artworks/:id" element={<ArtworkInfo />} />
          <Route path="/artworks/:id/edit" element={<ArtworksEditForm />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/map/directions" element={<MapPage2 />} />
          <Route path="/map/directions/from/:from/to/:to" element={<MapPage2 />} />
          ///map/directions?to=1234from=5678 //get request, post to req.query
          <Route path="/exhibitions/new" element={<ExhibitionNew />}></Route>
          <Route path="/exhibitions/:id" element={<ExhibitionPage />}></Route>
          <Route path="/exhibitions/:id/edit" element={<ExhibitionUpdate />}></Route>
          <Route path="/experimental" element={<ExperimentalPage />} />
        </Routes>
      </ErrorBoundary>
      <Box className="Footer">
        <CustomBottomNavigation />
      </Box>
    </>
  );
}

export default App;
