const About = () => {
  return (
    <section id="about" className="px-10 py-20">
      <h2 className="text-3xl font-bold text-center">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <p className="text-center mt-4 text-gray-400 max-w-2xl mx-auto">
        Enthusiastic Web Developer with experience in React.js, Node.js, and Manual Testing.
        Skilled in building responsive applications and identifying bugs.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">
        <div>
          <h3 className="text-cyan-400 text-2xl">50+</h3>
          <p>Projects & Tasks</p>
        </div>
        <div>
          <h3 className="text-cyan-400 text-2xl">Intern</h3>
          <p>Experience at Orionik</p>
        </div>
        <div>
          <h3 className="text-cyan-400 text-2xl">MERN</h3>
          <p>Stack Developer</p>
        </div>
      </div>
    </section>
  );
};

export default About;