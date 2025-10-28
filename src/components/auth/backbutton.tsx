import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      data-testid="test-back-button"
      onClick={() => navigate("/")}
      className="fixed top-5 left-5 z-50 bg-foreground rounded-md py-2 px-5 text-primary text-sm  flex items-center gap-2 cursor-pointer hover:bg-foreground/90 transition-all duration-150 ease-in"
    >
      <ArrowLeft />
      Back Home
    </button>
  );
};

export default BackButton;
