import { Link, useNavigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link
              to="/dashboard"
              className="text-primary font-semibold hover:text-secondary"
            >
              Dashboard Overview
            </Link>
            <Link
              to="/dashboard/tickets"
              className="text-primary font-semibold hover:text-secondary"
            >
              Ticket Management
            </Link>
          </div>

          <button
            onClick={handleLogout}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-all duration-150 ease-in cursor-pointer"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-[1440px] mx-auto p-6 mt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
