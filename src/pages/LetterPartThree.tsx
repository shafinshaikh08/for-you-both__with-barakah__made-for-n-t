import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LetterPartThree = () => {
  const navigate = useNavigate();

  return (
    <div className="letter-container">
      <div className="max-w-lg w-full space-y-8">
        {/* Divider at top */}
        <div className="letter-divider animate-fade-in" />

        {/* Dua content */}
        <div className="animate-fade-in-up space-y-6">
          <p className="letter-text">
            May Allah always protect this bond, keep love and patience between you, and bless your home with peace and barakah.
          </p>
          <p className="letter-text">
            May you continue growing together, laughing together, and supporting each other the way you always have.
          </p>
        </div>

        {/* Divider */}
        <div className="letter-divider animate-fade-in-up-delayed" />

        {/* Navigation */}
        <div className="pt-8 animate-fade-in-up-delayed-2">
          <button
            onClick={() => navigate("/closing")}
            className="letter-nav text-base"
          >
            One last thing
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LetterPartThree;
