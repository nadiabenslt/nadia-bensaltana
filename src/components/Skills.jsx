import { Code, Database, Layout, Layers, Settings } from "lucide-react";

export default function Skills(){
  const skills = [
    { icon: <Code size={24} />, name: "PHP Native" },
    { icon: <Code size={24} />, name: "JavaScript (React.js)" },
    { icon: <Layout size={24} />, name: "HTML" },
    { icon: <Layout size={24} />, name: "CSS (Bootstrap)" },
    { icon: <Database size={24} />, name: "MySQL" },
    { icon: <Layers size={24} />, name: "Project Design & Analysis" },
    { icon: <Settings size={24} />, name: "OOP & MVC Architecture" },
  ];

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


