
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={user ? <Write /> : <Navigate to="/" replace />}
        />
        <Route
          path="/settings"
          element={user ? <Settings /> : <Navigate to="/" replace />}
        />
        <Route path="/post/:postId" element={<Homepage />} />
      </Routes>
    </Router>
  );
}
export default App;