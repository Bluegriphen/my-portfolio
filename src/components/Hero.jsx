const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
      
      {/* LEFT */}
      <div className="max-w-xl">
        <p className="text-cyan-400">Welcome to my portfolio</p>

        <h1 className="text-5xl font-bold mt-4">
          Hi, I'm <span className="text-cyan-400">Priyanka</span>
        </h1>

        <p className="mt-4 text-gray-400">
          Web Developer | React | Node.js | Manual Tester
        </p>

        <p className="mt-4 text-gray-500">
          I build responsive web applications and ensure quality through testing.
        </p>

        <div className="mt-6 space-x-4">
          <button className="bg-cyan-500 px-6 py-2 rounded-lg">
            View My Work
          </button>
          <button className="border border-cyan-500 px-6 py-2 rounded-lg">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-10 md:mt-0">
        <img
          src="src/assets/photo.jpg"
          alt="profile"
          className="w-120  rounded-xl shadow-lg border border-cyan-500 m-auto"
        />
      </div>
    </section>
  );
};

export default Hero;