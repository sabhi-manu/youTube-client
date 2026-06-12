import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";

import { currentUserApi } from "./api/auth.api";
import { loginUser, setLoading } from "./features/authSlice";
import PageLoader from "./components/PageLoader";

// Components
const Home = lazy(() => import("./components/Home"));
const PlayingVideo = lazy(() => import("./components/PlayingVideo"));
const Search = lazy(() => import("./components/Search"));
const WatchHistory = lazy(() => import("./components/WatchHistory"));
const LikeVideo = lazy(() => import("./components/LikeVideo"));
const About = lazy(() => import("./components/About"));

// Profile Pages
const ProfileLayout = lazy(() =>
  import("./pages/profile/ProfileLayout")
);
const Videos = lazy(() => import("./pages/profile/Videos"));
const Playlist = lazy(() => import("./pages/profile/Playlist"));
const Following = lazy(() =>
  import("./pages/profile/Following")
);
const Tweets = lazy(() => import("./pages/profile/Tweets"));
const PlayListTab = lazy(() =>
  import("./pages/profile/PlayListTab")
);

// Dashboard & Upload
const Dashboard = lazy(() =>
  import("./pages/Dashboard")
);
const UploadVideoForm = lazy(() =>
  import("./pages/components/UploadVideoForm")
);

// Auth Pages
const Login = lazy(() =>
  import("./pages/auth/Login")
);
const Register = lazy(() =>
  import("./pages/auth/Register")
);

// Layouts
const AppLayout = lazy(() =>
  import("./layouts/AppLayout")
);
const AuthLayout = lazy(() =>
  import("./layouts/AuthLayout")
);

// Routes
const ProtectedRoute = lazy(() =>
  import("./routes/ProtectedRoute")
);
const PublicRoute = lazy(() =>
  import("./routes/PublicRoute")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await currentUserApi();
        dispatch(loginUser(res.data.data));
      } catch (err) {
        console.log("user not login.");
      } finally {
        dispatch(setLoading(false));
      }
    };

    getUser();
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            {/* Without Sidebar */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/video/upload"
              element={<UploadVideoForm />}
            />

            {/* With Sidebar */}
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/playlist/:playlistId"
                element={<PlayListTab />}
              />
              <Route
                path="/video/:videoId"
                element={<PlayingVideo />}
              />
              <Route
                path="/history"
                element={<WatchHistory />}
              />
              <Route
                path="/like/video"
                element={<LikeVideo />}
              />
              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/profile/:username/:userId"
                element={<ProfileLayout />}
              >
                <Route index element={<Videos />} />
                <Route
                  path="videos"
                  element={<Videos />}
                />
                <Route
                  path="playlist"
                  element={<Playlist />}
                />
                <Route
                  path="tweet"
                  element={<Tweets />}
                />
                <Route
                  path="following"
                  element={<Following />}
                />
              </Route>
            </Route>
          </Route>

          <Route element={<PublicRoute />}>
            <Route element={<AuthLayout />}>
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/register"
                element={<Register />}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;