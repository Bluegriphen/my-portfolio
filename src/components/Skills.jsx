
import {
  FaReact,
  FaPython,
  FaNode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiBootstrap,
   // ✅ VS CODE ICON
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { MdBugReport, MdChecklist } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const skillData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 85, icon: <FaReact />, color: "#38bdf8" },
      { name: "Tailwind CSS", level: 30, icon: <SiTailwindcss />, color: "#06b6d4" },
      { name: "Bootstrap", level: 75, icon: <SiBootstrap />, color: "#a855f7" },
      { name: "JavaScript", level: 70, icon: <SiJavascript />, color: "#facc15" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75, icon: <FaNode />, color: "#22c55e" },
      { name: "Express.js", level: 70, icon: <SiExpress />, color: "#94a3b8" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "Firebase", level: 80, icon: <SiFirebase />, color: "#f97316" },
      { name: "PostgreSQL", level: 65, icon: <SiPostgresql />, color: "#60A5FA" },
      { name: "MongoDB", level: 65, icon: <SiMongodb />, color: "#4ADE80" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Manual Testing", level: 80, icon: <AiOutlineCheckCircle />, color: "#f59e0b" },
      { name: "Test Case Writing", level: 78, icon: <MdChecklist />, color: "#fb923c" },
      { name: "Bug Tracking", level: 75, icon: <MdBugReport />, color: "#e879f9" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 75, icon: <SiGit />, color: "#F97316" },
      { name: "GitHub", level: 75, icon: <SiGithub />, color: "#E2E8F0" },
      { name: "VS Code", level: 85, icon: <VscVscode />, color: "#007ACC" }, // ✅ ADDED
    ],
  },
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

      {/* CATEGORY LOOP */}
      <div className="flex flex-col gap-12">
        {skillData.map((group, i) => (
          <div key={i}>

            {/* CATEGORY TITLE */}
            <h3 className="text-lg font-semibold text-gray-300 mb-4 border-l-4 border-orange-500 pl-3">
              {group.category}
            </h3>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6">
              {group.skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative bg-[#0f172a] rounded-2xl p-6 border border-gray-800 
                             overflow-hidden transition duration-300 
                             hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30"
                >

                  {/* GLOW */}
                  <div
                    className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20 "
                    style={{ backgroundColor: skill.color }}
                  ></div>

                  {/* ICON */}
                  <div
                    className="text-2xl mb-3"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>

                  {/* NAME */}
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                    {skill.name}
                  </p>

                  {/* LEVEL */}
                  <h2 className="text-3xl font-bold mb-1">
                    {skill.level}
                  </h2>

                  <p className="text-gray-400 text-sm mb-6">
                    Proficiency
                  </p>

                  {/* BAR */}
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

          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;