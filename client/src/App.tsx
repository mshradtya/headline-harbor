import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import PersistLogin from "./components/PersistLogin";
import PersistLogin from "./components/PersistentLogin";

// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
// import Profile from "./pages/Profile";
// import Unauthorized from "./pages/Unauthorized";
import RequireAuth from "./components/RequireAuth";
// import Missing from "./pages/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="unauthorized" element={<Unauthorized />} /> */}

        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["User"]} />}>
            <Route path="/bookmarks" element={<Bookmarks />} />
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>
        </Route>

        {/* catch all */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
