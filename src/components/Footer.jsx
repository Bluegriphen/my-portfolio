import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#020617] to-[#0f172a] border-t border-gray-800 mt-20 overflow-hidden">

      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-400/10 blur-3xl"></div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-400/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LOGO */}
          <h2 className="text-xl font-bold tracking-wide">
            Priyanka<span className="text-cyan-400">Dev</span>
          </h2>

          {/* NAV LINKS */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Bluegriphen"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full 
                         bg-[#0f172a] border border-gray-800 text-gray-400 
                         hover:text-black hover:bg-cyan-400 hover:scale-110 
                         transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/priyankaba-solanki-a34238213/ "
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full 
                         bg-[#0f172a] border border-gray-800 text-gray-400 
                         hover:text-black hover:bg-cyan-400 hover:scale-110 
                         transition duration-300"
            >
              <FaLinkedin />
            </a>

            
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">

          <p>
            © {new Date().getFullYear()} PriyankaDev. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Built with React & Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;