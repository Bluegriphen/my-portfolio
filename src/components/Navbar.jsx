const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <h1 className="text-xl font-bold text-cyan-400">PriyankaDev</h1>

      <div className="space-x-6 hidden md:block">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="bg-cyan-500 px-4 py-2 rounded-lg">
        Get in Touch
      </button>
    </div>
  );
};

export default Navbar;