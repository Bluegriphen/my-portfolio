const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 relative">

      {/* CYAN GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-400/10 blur-3xl"></div>

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Enthusiastic Web Developer with experience in React.js, Node.js, and Manual Testing.
          Skilled in building responsive applications and identifying bugs.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 relative z-10">

        {[
          { value: "5+", label: "Projects & Tasks" },
          { value: "Intern", label: "Experience at Orionik" },
          { value: "MERN", label: "Stack Developer" },
        ].map((item, i) => (
          <div
            key={i}
            className="relative bg-[#0f172a] p-6 rounded-2xl border border-gray-800 
                       text-center overflow-hidden transition duration-300
                       hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-400/10"
          >

            {/* GLOW CIRCLE */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-400/10 rounded-full"></div>

            {/* VALUE */}
            <h3 className="text-cyan-400 text-3xl font-bold mb-2">
              {item.value}
            </h3>

            {/* LABEL */}
            <p className="text-gray-400 text-sm">
              {item.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default About;