import { useLocation } from "react-router-dom";
import Navbar from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  // Check if the current path is "/login"
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <main className="App">
      {!hideNavbar && <Navbar />}
      <Outlet />
    </main>
  );
};

export default Layout;
