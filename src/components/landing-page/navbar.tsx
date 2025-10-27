const NavBar = () => {
  return (
    <header className="fixed left-0 top-0 w-full z-50 h-20 flex justify-between items-center px-5 bg-primary text-foreground">
      <p>Taskify</p>

      <nav>
        <ul className="flex gap-7">
          <li className="py-2">Login</li>
          <li className="bg-foreground text-primary px-5 py-2 rounded-md">
            Get Started
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
