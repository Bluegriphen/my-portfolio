import {
  FaReact,
  FaLaravel,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiVite,
  SiFramer,
} from "react-icons/si";

const skills = [
  { name: "Laravel", level: 95, icon: <FaLaravel />, color: "#f9322c" },
  { name: "Framer Motion", level: 90, icon: <SiFramer />, color: "#a855f7" },
  { name: "Vue", level: 88, icon: <FaVuejs />, color: "#22c55e" },
  { name: "React", level: 85, icon: <FaReact />, color: "#38bdf8" },
  { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss />, color: "#06b6d4" },
  { name: "Firebase", level: 80, icon: <SiFirebase />, color: "#facc15" },
  { name: "Python", level: 75, icon: <FaPython />, color: "#6366f1" },
  { name: "Vite", level: 85, icon: <SiVite />, color: "#f59e0b" },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-orange-500">Skills</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Technologies and tools I use to build modern applications
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="relative bg-[#0f172a] rounded-2xl p-6 border border-gray-800 
                 overflow-hidden transition duration-300 
                 hover:-translate-y-2 hover:shadow-lg"
    >

      {/* TOP RIGHT GLOW */}
      <div
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20"
        style={{ backgroundColor: skill.color }}
      ></div>

      {/* ICON */}
      <div
        className="text-2xl mb-3"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>

      {/* TITLE */}
      <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
        {skill.name}
      </p>

      {/* NUMBER */}
      <h2 className="text-3xl font-bold mb-1">
        {skill.level}
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-400 text-sm mb-6">
        Proficiency
      </p>

      {/* PROGRESS BAR */}
      <div className="w-full h-1 bg-gray-700 rounded-full">
        <div
          className="h-1 rounded-full transition-all duration-500"
          style={{
            width: `${skill.level}%`,
            backgroundColor: skill.color,
          }}
        ></div>
      </div>

    </div>
  ))}
</div>
    </section>
  );
};

export default Skills;