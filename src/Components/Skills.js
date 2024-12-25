import React from 'react';

const skills = ['JavaScript', 'React', 'Angular', 'Python', 'Data Analysis', 'AWS', 'REST APIs'];

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
