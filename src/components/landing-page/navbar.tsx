import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed left-0 top-0 w-full z-50 h-20 flex justify-between items-center px-5 bg-primary text-foreground">
      <p>Taskify</p>

      <nav>
        <ul className="flex gap-7">
          <li onClick={() => navigate("/login")} className="py-2">
            Login
          </li>
          <li
            onClick={() => navigate("/signup")}
            className="bg-foreground text-primary px-5 py-2 rounded-md"
          >
            Get Started
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
