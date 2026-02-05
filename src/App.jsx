import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PlayingVideo from "./components/PlayingVideo";
import Search from "./components/Search";
import { Route, Routes } from "react-router";
import ProfileLayout from "./pages/profile/ProfileLayout";
import Videos from "./pages/profile/Videos";
import Playlist from "./pages/profile/Playlist";
import Following from "./pages/profile/Following";
import Tweets from "./pages/profile/Tweets";
import PlayListTab from "./pages/profile/PlayListTab";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UploadVideoForm from "./pages/components/UploadVideoForm";
// import FooterBar from "./components/FooterBar";


const App = () => {
  return (
    <div  >
      {/* <NavBar /> */}

      <Routes>
        {/* Routes WITHOUT sidebar */}
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/video/upload" element={<UploadVideoForm/>} />
        {/* Routes WITH sidebar */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/playlist/:playlistId" element={<PlayListTab />} />
          <Route path="/video/:videoId" element={<PlayingVideo />} />

          <Route path="/profile/:username/:userId" element={<ProfileLayout />}>
            <Route index element={<Videos />} />
            <Route path="videos" element={<Videos />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="tweet" element={<Tweets />} />
            <Route path="following" element={<Following />} />
          </Route>
        </Route>

          <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      </Routes>
      {/* <FooterBar/> */}
    </div>
  );
};

export default App;
