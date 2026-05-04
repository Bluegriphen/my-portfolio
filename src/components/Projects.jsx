import assets from "../assets/assets.js";

const projects = [
  {
    title: "VSITR Paper Portal",
    desc: "React-based platform for students to download academic papers with Firebase integration and admin panel.",
    tech: ["React", "Firebase"],
    live: "https://vsitr-paper.web.app/",
    github: "https://github.com/Bluegriphen/vsitr-paper",
    image: assets.vsitrPaper1,
  },
  {
    title: "Food Delivery App",
    desc: "Full-stack MERN application with authentication, admin panel, and user interface.",
    tech: ["MongoDB", "Express", "React", "Node"],
    live: "#",
    github: "https://github.com/Bluegriphen/food-mart",
    image: assets.foodMart,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Some of my recent work
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800 
                       transition duration-300 hover:-translate-y-2 
                       hover:shadow-lg hover:shadow-cyan-400/10"
          >

            {/* TOP RIGHT GLOW */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-400/10 rounded-full"></div>

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 relative z-10">

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-cyan-400/10 text-cyan-400 px-2 py-1 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">
                {project.live !== "#"?  <a
                  href={project.live}
                  target="_blank"
                  className="bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm 
                             hover:bg-cyan-300 transition"
                >
                  Live Demo
                </a>:<span className="bg-gray-700 text-gray-500 px-4 py-2 rounded-lg text-sm cursor-not-allowed">
    Coming Soon
  </span>}
               

                <a
                  href={project.github}
                  target="_blank"
                  className="border border-cyan-400 px-4 py-2 rounded-lg text-sm 
                             hover:bg-cyan-400 hover:text-black transition"
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