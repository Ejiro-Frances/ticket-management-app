import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      data-testid="test-header"
      aria-label="Main site header"
      className="fixed left-0 top-0 w-full z-50 h-20 flex justify-between items-center px-5 bg-primary text-foreground"
    >
      {/* Brand logo */}
      <Link to="/">
        <p
          data-testid="test-logo"
          aria-label="Ticket Zen home"
          role="heading"
          aria-level={1}
          className="bg-secondary rounded-md px-2 py-2 font-bold"
        >
          Ticket Zen
        </p>
      </Link>

      {/* Navigation links */}
      <nav
        data-testid="test-nav"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul data-testid="test-nav-links" className="flex gap-7">
          {/* login link */}
          <li>
            <Link
              to="/auth/login"
              data-testid="test-nav-login"
              aria-label="Go to login page"
              aria-current={
                location.pathname === "/auth/login" ? "page" : undefined
              }
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate("/auth/login")}
              className="cursor-pointer border border-transparent hover:border-foreground py-2 px-5 rounded-md transition-all duration-150 ease-in"
            >
              Login
            </Link>
          </li>

          {/* signup link */}
          <li>
            <Link
              to="/auth/signup"
              data-testid="test-nav-signup"
              aria-label="Go to signup page"
              aria-current={
                location.pathname === "/auth/signup" ? "page" : undefined
              }
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate("/auth/signup")}
              className="bg-foreground hover:bg-foreground/90 cursor-pointer text-primary px-5 py-2 rounded-md transition-all duration-150 ease-in"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
