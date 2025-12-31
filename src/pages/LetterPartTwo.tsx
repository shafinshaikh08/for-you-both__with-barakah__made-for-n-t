import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LetterPartTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="letter-container">
      <div className="max-w-lg w-full space-y-8">
        {/* Divider at top */}
        <div className="letter-divider animate-fade-in" />

        {/* Main content */}
        <div className="animate-fade-in-up space-y-6">
          <p className="letter-text">
            Seeing you together honestly feels easy and warm. There's fun, understanding, and a lot of respect, and that's what makes you proper couple goals without even trying.
          </p>
        </div>

        {/* Names highlight */}
        <div className="animate-fade-in-up-delayed">
          <p className="letter-heading text-xl md:text-2xl text-center py-4">
            Nasir & Tasleem
          </p>
        </div>

        {/* Divider */}
        <div className="letter-divider animate-fade-in-up-delayed" />

        {/* Navigation */}
        <div className="pt-8 animate-fade-in-up-delayed-2">
          <button
            onClick={() => navigate("/letter/3")}
            className="letter-nav text-base"
          >
            Read more
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LetterPartTwo;
