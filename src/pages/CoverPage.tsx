import { useNavigate } from "react-router-dom";

const CoverPage = () => {
  const navigate = useNavigate();

  return (
    <div className="letter-container">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Names */}
        <div className="animate-fade-in-up">
          <h1 className="letter-heading text-3xl md:text-4xl font-medium">
            Nasir & Tasleem
          </h1>
        </div>

        {/* Anniversary Message */}
        <div className="animate-fade-in-up-delayed">
          <p className="letter-text text-xl md:text-2xl italic">
            Happy Anniversary 🤍
          </p>
        </div>

        {/* Divider */}
        <div className="letter-divider animate-fade-in-up-delayed-2" />

        {/* Subtitle */}
        <div className="animate-fade-in-up-delayed-2">
          <p className="text-muted-foreground text-base md:text-lg">
            A letter, from someone who adores you both.
          </p>
        </div>

        {/* Open Button */}
        <div className="pt-8 animate-fade-in-up-delayed-3">
          <button
            onClick={() => navigate("/letter/1")}
            className="letter-button"
          >
            Open the letter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
