import React from 'react';

const skills = ['Java', 'React', 'Angular', 'Python', 'Node.js', 'Flutter', 'Dart', 'Django', 'SQL', 'C', 'C++', 'Express', 'Power Automate', 'Unit Testing', 'Data Analysis', 'AWS', 'REST APIs'];

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
