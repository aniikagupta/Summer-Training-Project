
const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mt-6">
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/hero.jpg"
          alt="New Collection"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="text-white px-8 sm:px-12 md:px-16 max-w-xl">

            <p className="text-sm tracking-[0.3em] mb-4">
              NEW SEASON
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-5">
              Everyday Style,
              <br />
              Made for You.
            </h1>

            <p className="text-base sm:text-lg mb-8 text-white/90">
              Discover our latest collection of timeless pieces
              designed for every occasion.
            </p>

            <button
              className="bg-white text-black px-8 py-3 text-sm
              tracking-wide hover:bg-black hover:text-white
              transition duration-300"
            >
              SHOP NOW
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;