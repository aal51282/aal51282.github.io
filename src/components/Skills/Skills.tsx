import React from "react";
import styles from "./Skills.module.css";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiAssemblyscript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ReactElement;
}

const skillsData = {
  languages: [
    { name: "Java", icon: <FaJava /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C", icon: <SiC /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Assembly", icon: <SiAssemblyscript /> },
  ],
  frameworks: [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <TbBrandNextjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  databases: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],
  technologies: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "REST API", icon: <FaDatabase /> },
  ],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills} data-aos="fade-up">
      <h2>Skills</h2>
      <div className={styles.skillsContainer}>
        <div>
          <h3>Programming Languages</h3>
          <div className={styles.skillIcons}>
            {skillsData.languages.map((skill, index) => (
              <div key={index} className={styles.skillIcon}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Frameworks/Libraries</h3>
          <div className={styles.skillIcons}>
            {skillsData.frameworks.map((skill, index) => (
              <div key={index} className={styles.skillIcon}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Databases</h3>
          <div className={styles.skillIcons}>
            {skillsData.databases.map((skill, index) => (
              <div key={index} className={styles.skillIcon}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Technologies</h3>
          <div className={styles.skillIcons}>
            {skillsData.technologies.map((skill, index) => (
              <div key={index} className={styles.skillIcon}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
