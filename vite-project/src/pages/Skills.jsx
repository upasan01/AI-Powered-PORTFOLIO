import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaUsers, FaComments, FaRegClock, FaLightbulb, FaHandsHelping, FaAws } from 'react-icons/fa';
import {
  SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiCss3,
  SiTailwindcss, SiBootstrap, SiGit, SiGithub, SiVisualstudiocode, SiPostman,
  SiGooglecloud, SiGithubactions, SiJava, SiPython, SiC,
  SiIbmcloud,
} from 'react-icons/si';
import { VscCode } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C", icon: <SiC size={32} className="text-blue-600" /> },
      { name: "Java", icon: <SiJava size={32} className="text-red-500" /> },
      { name: "Python", icon: <SiPython size={32} className="text-yellow-400" /> },
      { name: "JavaScript", icon: <SiJavascript size={32} className="text-yellow-500 bg-black rounded" /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: <SiHtml5 size={32} className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 size={32} className="text-blue-500" /> },
      { name: "React.js", icon: <SiReact size={32} className="text-cyan-400" /> },
      { name: "Node.js", icon: <SiNodedotjs size={32} className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress size={32} className="text-gray-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={32} className="text-teal-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap size={32} className="text-purple-600" /> },
      { name: "EJS", icon: <VscCode size={32} className="text-green-400" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-600" /> },
      { name: "SQL", icon: <FaDatabase size={32} className="text-sky-600" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit size={32} className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub size={32} className="text-gray-300" /> },
      { name: "VS Code", icon: <SiVisualstudiocode size={32} className="text-sky-500" /> },
      { name: "Postman", icon: <SiPostman size={32} className="text-orange-500" /> },
      { name: "Chrome DevTools", icon: <AiOutlineApi size={32} className="text-blue-400" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      // CORRECTED: Using FaAws from the 'fa' icon pack
      { name: "AWS (Foundations)", icon: <FaAws size={32} className="text-orange-400" /> },
      { name: "Google Cloud (Basics)", icon: <SiGooglecloud size={32} className="text-blue-400" /> },
      { name: "IBM Cloud (Fundamentals)", icon: <SiIbmcloud size={32} className="text-blue-500" /> },
      { name: "GitHub Actions (CI/CD)", icon: <SiGithubactions size={32} className="text-cyan-400" /> },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Collaboration", icon: <FaUsers size={32} className="text-purple-400" /> },
      { name: "Communication", icon: <FaComments size={32} className="text-pink-400" /> },
      { name: "Teamwork", icon: <FaHandsHelping size={32} className="text-green-400" /> },
      { name: "Time Management", icon: <FaRegClock size={32} className="text-yellow-400" /> },
      { name: "Leadership", icon: <FaLightbulb size={32} className="text-amber-300" /> },
    ],
  },
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

function Skills() {
  return (
    <section id="skills" className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Professional Skills
          </h2>
          <p className="text-lg text-gray-400 mt-4">Technologies and tools I work with.</p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-200 mb-6 border-l-4 border-blue-500 pl-4">
                {category.title}
              </h3>
              <motion.div
                className="flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(31, 41, 55, 0.7)",
                      boxShadow: "0px 0px 15px rgba(147, 197, 253, 0.3)",
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skill.icon}
                    <span className="text-md font-medium text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;