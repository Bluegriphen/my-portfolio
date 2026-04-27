const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4">

      {/* NAV CONTAINER */}
      <div className="w-full max-w-6xl flex justify-between items-center px-6 py-3 mt-4
                      bg-[#0f172a]/70 backdrop-blur-md border border-gray-800 
                      rounded-full shadow-lg shadow-cyan-400/10">

        {/* LOGO */}
        <h1 className="text-lg font-bold text-cyan-400 tracking-wide">
          Priyanka
        </h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* BUTTON */}
        <button  className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-medium
                           hover:bg-cyan-300 hover:scale-105 transition duration-300 
                           shadow-md shadow-cyan-400/20">
          Get in Touch
        </button>

      </div>
    </div>
  );
};

export default Navbar;