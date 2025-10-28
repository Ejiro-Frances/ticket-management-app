// src/pages/dashboardpage.tsx
import { useNavigate, Link } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* NAVIGATION */}
      <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

          <div className="flex items-center space-x-6">
            <Link
              to="/dashboard/tickets"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Ticket Management
            </Link>
            <button
              onClick={handleLogout}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-bprimary/90transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold mb-6">Summary Statistics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white shadow p-6 rounded-lg text-center">
            <h3 className="text-lg font-medium text-gray-600">Total Tickets</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg text-center">
            <h3 className="text-lg font-medium text-gray-600">Open Tickets</h3>
            <p className="text-3xl font-bold text-yellow-500 mt-2">35</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg text-center">
            <h3 className="text-lg font-medium text-gray-600">
              Resolved Tickets
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">85</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
