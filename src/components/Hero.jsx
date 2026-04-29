import profileImg from "../assets/photo.jpg"; // ✅ correct way in Vite

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; 
    link.download = "Priyanka_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row items-center justify-between relative"
    >

      {/* CYAN GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-400/10 blur-3xl"></div>

      {/* LEFT */}
      <div className="max-w-xl relative z-10">

        <p className="text-cyan-400 mb-2">
          - - WELCOME TO MY PORTFOLIO
        </p>

        <h1 className="text-4xl md:text-7xl font-bold leading-tight mt-2">
          Hi, I'm <span className="text-cyan-400">Priyanka</span>
        </h1>

        <p className="mt-4 text-gray-400">
          Web Developer  ·  Manual Tester   ·  MERN Stack
        </p>

        <p className="mt-4 text-gray-500">
          I build responsive, real-world web applications and ensure quality through structured testing. Currently finishing my B.E. in Computer Engineering.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap">

          {/* DOWNLOAD RESUME */}
          <button
            onClick={handleDownload}
            className="bg-cyan-400 text-black px-6 py-3 rounded-full font-medium 
                       hover:bg-cyan-300 hover:scale-105 transition duration-300 
                       shadow-lg shadow-cyan-400/20"
          >
            Download Resume
          </button>

          {/* CONTACT */}
          <a
            href="#contact"
            className="border border-cyan-400 px-6 py-3 rounded-full 
                       hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            Contact Me
          </a>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-12 md:mt-0 relative z-10 flex justify-center">

        <div className="relative bg-[#0f172a] p-3 rounded-2xl border border-gray-800 
                        hover:shadow-lg hover:shadow-cyan-400/10 transition">

          <div className="absolute -top-8 -right-8 w-28 h-28 bg-cyan-400/10 rounded-full"></div>

          <img
            src={profileImg}
            alt="profile"
            className="w-80 md:w-[420px] rounded-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;