import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LetterPartOne = () => {
  const navigate = useNavigate();

  return (
    <div className="letter-container">
      <div className="max-w-lg w-full space-y-8">
        {/* Salutation */}
        <div className="animate-fade-in-up">
          <p className="letter-text italic text-muted-foreground">
            Nasir Bhai & Tasleem Didi,
          </p>
        </div>

        {/* Opening */}
        <div className="animate-fade-in-up-delayed">
          <p className="letter-text">
            Happy anniversary 🤍
          </p>
        </div>

        {/* Main paragraph */}
        <div className="animate-fade-in-up-delayed-2 space-y-6">
          <p className="letter-text">
            You both have always been more than just a couple to me. From the little things to the big ones, you've always gone out of your way for me, spoiled me with gifts, care, and time, and made me feel looked after in ways I'll always be grateful for.
          </p>
          <p className="letter-text">
            That's something I'll never forget.
          </p>
        </div>

        {/* Navigation */}
        <div className="pt-12 animate-fade-in-up-delayed-3">
          <button
            onClick={() => navigate("/letter/2")}
            className="letter-nav text-base"
          >
            Continue reading
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LetterPartOne;
