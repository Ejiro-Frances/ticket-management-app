import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProtectedRoute from "./components/auth/protectedroute";
import TicketPage from "./pages/ticketpage";
import DashboardPage from "./pages/dashboardpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/tickets",
    element: (
      <ProtectedRoute>
        <TicketPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
