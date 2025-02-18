import React from 'react';

const projects = [
  {
    name: 'Seminar Synergy',
    description: 'Developed a cross-platform mobile application using Flutter and Firebase for seminar tracking, tailored specifically for MAC students. The app enables students to easily browse and register for seminars of their interest, enhancing accessibility and engagement.',
    link: 'https://github.com/nandin14/Seminar_Synergy',
    skills: 'Flutter, Dart, Python, Data Analysis, Firebase'
  },
  {
    name: 'Load Balancing System',
    description: 'Efficient client request handling using advanced socket programming in C. Constructed a multi-server load balancing system to distribute client requests efficiently across multiple servers by implementing advanced socket programming and process management in C on a Linux platform. Improvised file management by executing recursive directory scanning, file attribute manipulation, and error-checking, elevated search efficiency and system responsiveness.',
    link: 'https://github.com/nandin14/Server-Client-Communication',
    skills: 'C, Git, Linux, Jira'
  },
  {
    name: 'Covid Dashboard Project',
    description: 'Implemented advanced data visualization techniques, including interactive charts and graphs using React to present comprehensive statistical insights for COVID-19 trends in India. Employed Axios, a promise-based HTTP client, to efficiently fetch real-time data from the COVID-19 Tracker API, ensuring a reliable and timely information feed for users.',
    link: 'https://github.com/nandin14/covid-dashboard', // Replace with actual link if available
    skills: 'React, MySQL, Git, CI/CD, JUnit, Jira, Axios'
  },
  {
    name: 'Foo-Doo Service',
    description: 'Created a highly-scalable front-end platform for users to order home-made Indian food online with a focus on accessibility and better user experience (UX).',
    link: 'https://github.com/nandin14/Foo-Doo-Service', // Replace with actual link if available
    skills: 'React, Redux, HTML5, CSS3, JavaScript, Bootstrap, Material-UI, Firebase, Heroku'
  },
  {
    name: 'HVAC System',
    description: 'Built an HVAC System portal using regression algorithms to anticipate accurate heating and cooling loads. Performed various operations on data, such as data preprocessing, exploratory data analysis, data splitting for testing and training purposes, model training, and model validation. Elevated our project\'s impact through innovative data visualization techniques using Power BI, transforming complex model outputs into actionable insights.',
    link: 'https://github.com/nandin14/Prediction-system-for-HVAC', // Replace with actual link if available
    skills: 'Python, MySQL, Data Analysis, Power BI'
  }
];


function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="skills">Skills: {project.skills}</div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
