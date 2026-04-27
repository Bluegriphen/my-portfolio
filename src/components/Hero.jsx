const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row items-center justify-between relative">

      {/* CYAN GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-400/10 blur-3xl"></div>

      {/* LEFT */}
      <div className="max-w-xl relative z-10">

        <p className="text-cyan-400 mb-2">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
          Hi, I'm <span className="text-cyan-400">Priyanka</span>
        </h1>

        <p className="mt-4 text-gray-400">
          Web Developer | React | Node.js | Manual Tester
        </p>

        <p className="mt-4 text-gray-500">
          I build responsive web applications and ensure quality through testing.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium 
                             hover:bg-cyan-300 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-400/20">
            View My Work
          </button>

          <button className="border border-cyan-400 px-6 py-3 rounded-lg 
                             hover:bg-cyan-400 hover:text-black transition duration-300">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-12 md:mt-0 relative z-10 flex justify-center">

        {/* IMAGE CARD */}
        <div className="relative bg-[#0f172a] p-3 rounded-2xl border border-gray-800 
                        hover:shadow-lg hover:shadow-cyan-400/10 transition">

          {/* GLOW CIRCLE */}
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-cyan-400/10 rounded-full"></div>

          <img
            src="/src/assets/photo.jpg"
            alt="profile"
            className="w-80 md:w-[420px] rounded-xl object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;