import { useState } from "react";
import "./App.css";

import CustomDrawerMenu from "../../components/MenuDrawer/CustomDrawerMenu";
import CustomDrawerLogin from "../../components/LoginDrawer/CustomDrawerLogin";
import CustomBottomNavigation from "../../components/CustomBottomNavigation/CustomBottomNavigation";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
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
import ExhibitionUpdate from "../ExhibitionUpdate/ExhibitionUpdate"
import { getToken , getUser} from "../../utilities/users-service";

function App() {
  const [exhibitions, setExhibition] = useState([]);
  const [user, setUser] = useState(getUser());

  return (
    <>
      <CssBaseline />
      <Box className="Header">
        <CustomDrawerMenu />

        <img src="/src/images/logo.gif" />
        <CustomDrawerLogin user={user} setUser={setUser}/>
      </Box>

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/users/signup" element={<SignUpForm />} />
          <Route path="/users/login" element={<LoginForm setUser={setUser} />} /> 
          <Route path="/users/logout" element={<LogOutMsg/>} />
          <Route path="/artworks" element={<ArtworksPage />} />
          <Route path="/artworks/new" element={<ArtworksNew user={user}/>} /> {/* admin access only-> (user.role === "admin") */}
          <Route path="/artworks/:id" element={<ArtworkInfo user={user}/>} /> {/* admin access see edit and delete btn -> (user.role === "admin") */}
          <Route path="/artworks/:id/edit" element={<ArtworksEditForm user={user}/>} />  {/* admin access only -> (user.role === "admin" */}
          <Route path="/map" element={<MapPage />} />
          <Route path="/map/directions" element={<MapPage2 />} />
          <Route path="/map/directions/from/:from/to/:to" element={<MapPage2 />} />
          ///map/directions?to=1234from=5678 //get request, post to req.query
          <Route path="/exhibitions/new" element={<ExhibitionNew user={user}/>}></Route> {/* admin access only-> (user.role === "admin") */}
          <Route path="/exhibitions/:id" element={<ExhibitionPage user={user}/>}></Route> {/* admin access see edit and delete btn -> (user.role === "admin") */}
          <Route path="/exhibitions/:id/edit" element={<ExhibitionUpdate user={user}/>}></Route> {/* admin access only -> (user.role === "admin" */}
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