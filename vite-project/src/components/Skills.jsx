import React from 'react';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL'] },
    { category: 'Other', items: ['Git', 'Docker', 'AWS'] },
  ];

  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="max-w-4xl mx-auto">
        {skills.map((skillSet) => (
          <div key={skillSet.category} className="mb-4">
            <h3 className="text-2xl font-semibold">{skillSet.category}</h3>
            <ul className="list-disc list-inside">
              {skillSet.items.map((skill) => (
                <li key={skill} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;