const ClosingPage = () => {
  return (
    <div className="letter-container">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Divider at top */}
        <div className="letter-divider animate-fade-in" />

        {/* Closing message */}
        <div className="animate-fade-in-up space-y-6">
          <p className="letter-text text-xl md:text-2xl">
            Always thankful to have you both.
          </p>
          <p className="letter-text text-xl md:text-2xl">
            May Allah keep you together in khair.
          </p>
        </div>

        {/* Ameen */}
        <div className="animate-fade-in-up-delayed">
          <p className="letter-heading text-2xl md:text-3xl italic pt-4">
            Ameen.
          </p>
        </div>

        {/* Divider */}
        <div className="letter-divider animate-fade-in-up-delayed-2" />

        {/* Footer */}
        <div className="pt-12 animate-fade-in-up-delayed-3">
          <p className="text-muted-foreground text-sm">
            Made with love, by Shafin 🤍
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClosingPage;
