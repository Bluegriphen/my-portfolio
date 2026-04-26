const projects = [
  {
    title: "VSITR Paper Portal",
    desc: "React-based platform for students to download academic papers with Firebase integration and admin panel.",
    tech: ["React", "Firebase"],
    live: "https://vsitr-paper.web.app/",
    github: "https://github.com/Bluegriphen",
    image: "/project1.png",
  },
  {
    title: "Food Delivery App",
    desc: "Full-stack MERN application with authentication, admin panel, and user interface.",
    tech: ["MongoDB", "Express", "React", "Node"],
    live: "#",
    github: "https://github.com/Bluegriphen",
    image: "/project2.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-10 py-20">
      
      <h2 className="text-3xl font-bold text-center">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Some of my recent work
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-xl overflow-hidden border border-gray-700 hover:scale-105 transition"
          >
            
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/10 text-cyan-400 px-2 py-1 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="bg-cyan-500 px-4 py-2 rounded-lg text-sm"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="border border-cyan-500 px-4 py-2 rounded-lg text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;