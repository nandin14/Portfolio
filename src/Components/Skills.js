import React from 'react';

const skills = [
  'JavaScript, TypeScript, Java, Python',
  'Angular, React, Flutter',
  'RESTful APIs, AWS, CI/CD',
  'Automation Testing, Jest, Bash Scripting'
];

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
