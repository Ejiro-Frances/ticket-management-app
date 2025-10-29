import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 border-b border-secondary backdrop-blur-2xl shadow-md">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-5">
        {/* Logo */}
        <Link to="/dashboard" className="text-2xl font-bold text-secondary">
          Ticket Zen
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-secondary">
          <Link
            to="/dashboard"
            className="text-lg font-medium hover:text-bprimary transition"
          >
            Dashboard
          </Link>

          <Link
            to="/tickets"
            className="text-lg font-medium hover:text-bprimary transition"
          >
            Ticket Management
          </Link>

          <button
            onClick={handleLogout}
            className="text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md transition"
          >
            Logout
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-secondary shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-4 text-secondary">
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-bprimary transition"
            >
              Dashboard
            </Link>

            <Link
              to="/tickets"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-bprimary transition"
            >
              Ticket Management
            </Link>

            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md transition"
            >
              Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
