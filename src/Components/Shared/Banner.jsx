const Banner = () => {
  return (
    <div
      className="hero md:h-96 relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 text-xl md:text-5xl lg:text-6xl font-bold uppercase border-b-8 border-red-600">
            WELCOME TO 90 MINUTES FC
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
