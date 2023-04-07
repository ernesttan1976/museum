import React from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import { BrowserRouter} from 'react-router-dom'
import { theme } from '../../theme.js';
import { ThemeProvider } from '@emotion/react';

import { useState } from "react";
import "./App.css";

import CustomDrawerMenu from "../../components/MenuDrawer/CustomDrawerMenu";
import CustomDrawerLogin from "../../components/LoginDrawer/CustomDrawerLogin";
import CustomBottomNavigation from "../../components/CustomBottomNavigation/CustomBottomNavigation";
import { Routes, Route } from "react-router-dom";
import AccessDeniedMsg from "../../components/AccessDeniedMsg/AccessDeniedMsg";
import HomePage from "../HomePage/HomePage";
import SignUpForm from "../AuthPage/SignUpForm";
import LoginForm from "../AuthPage/LoginForm";
import LogOutMsg from "../AuthPage/LogOutMsg";
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
import ExhibitionUpdate from "../ExhibitionUpdate/ExhibitionUpdate";
import AdminSignUpForm from "../AuthPage/AdminSignUpForm";
import PageNotFound from "../PageNotFound/PageNotFound";
import { getToken, getUser } from "../../utilities/users-service";
import Logo from '../../images/logo.gif';

function App() {
  const [exhibitions, setExhibition] = useState([]);
  const [user, setUser] = useState(getUser());

  return (
    <ErrorBoundary>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <Box className="Header">
              <CustomDrawerMenu user={user} />
              <img className="logo" src={Logo} />
              <CustomDrawerLogin user={user} setUser={setUser} />
            </Box>
            <ErrorBoundary>
              <h6>Exhibitions</h6>
              <Routes>
                <Route path="/*" element={<PageNotFound />} />
                <Route path="/" element={<HomePage user={user} />} />
                <Route path="/users/signup" element={<SignUpForm />} />
                <Route
                  path="/users/login"
                  element={<LoginForm setUser={setUser} />}
                />
                <Route path="/users/logout" element={<LogOutMsg />} />
                <Route path="/artworks" element={<ArtworksPage />} />
                <Route
                  path="/artworks/:id"
                  element={<ArtworkInfo user={user} />}
                />{" "}
                {/* admin access see edit and delete btn -> (user.role === "admin") */}
                <Route
                  path="/exhibitions/:id"
                  element={<ExhibitionPage user={user} />}
                ></Route>{" "}
                {/* admin access see edit and delete btn -> (user.role === "admin") */}
                <Route path="/experimental" element={<ExperimentalPage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/map/directions" element={<MapPage2 />} />
                <Route
                  path="/map/directions/from/:from/to/:to"
                  element={<MapPage2 />}
                />
          ///map/directions?to=1234from=5678 //get request, post to req.query

                <Route path="/artworks/new" element={user && user.userRole == "admin" ? <ArtworksNew user={user} /> : <AccessDeniedMsg />} /> {/* admin access only-> (user.role === "admin") */}
                <Route path="/artworks/:id/edit" element={user && user.userRole == "admin" ? <ArtworksEditForm user={user} /> : <AccessDeniedMsg />} />  {/* admin access only -> (user.role === "admin" */}
                <Route path="/exhibitions/new" element={user && user.userRole == "admin" ? <ExhibitionNew user={user} /> : <AccessDeniedMsg />} /> {/* admin access only-> (user.role === "admin") */}
                <Route path="/exhibitions/:id/edit" element={user && user.userRole == "admin" ? <ExhibitionUpdate user={user} /> : <AccessDeniedMsg />} /> {/* admin access only -> (user.role === "admin" */}
                <Route path="/admin/signup" element={user && user.userRole == "admin" ? <AdminSignUpForm user={user} /> : <AccessDeniedMsg />} />   {/* admin access only -> (user.role === "admin" */}
              </Routes>

            </ErrorBoundary>
            <Box className="Footer">
              <CustomBottomNavigation />
            </Box>
          </BrowserRouter>
        </ThemeProvider>
      </React.StrictMode>
    </ErrorBoundary>
  );
}

export default App;
