import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate("/");
    }
  };

  return (
    <button
      data-testid="test-back-button"
      id="back-home-button"
      type="button"
      onClick={() => navigate("/")}
      onKeyDown={handleKeyDown}
      className="fixed top-5 left-5 z-50 bg-foreground rounded-md py-2 px-5 text-primary text-sm flex items-center gap-2 cursor-pointer hover:bg-foreground/90 transition-all duration-150 ease-in"
      role="button"
      aria-label="Go back to home page"
      aria-pressed="false"
      tabIndex={0}
    >
      <ArrowLeft
        data-testid="test-back-icon"
        aria-hidden="true"
        focusable="false"
        className="w-4 h-4"
      />
      <span data-testid="test-back-text" aria-hidden="false">
        Back Home
      </span>
    </button>
  );
};

export default BackButton;
