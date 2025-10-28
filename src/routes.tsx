import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import DashboardPage from "./pages/dashboardpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

export default router;
