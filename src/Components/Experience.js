import React from 'react';

const experiences = [
  {
    company: 'Vosyn, Canada',
    duration: 'Sep 2024 – Dec 2024',
    role: 'Full Stack Developer Intern',
    description: 'Led a team of 8-10 members by planning and executing sprint tasks, achieving 100% on-time delivery of project milestones, and demonstrating strong teamwork and communication. Ensured high-quality code through meticulous reviews, and comprehensive unit testing using Jest, achieving a 30% reduction in rework and post-deployment issues, significantly enhancing application stability.',
  },
  {
    company: 'Sunflower, India',
    duration: 'Jul 2021 – Jul 2023',
    role: 'Software Developer',
    description: 'Created reusable components and services using Angular to optimize development efficiency and application performance through code splitting, lazy loading, and efficient change detection strategies. Minimized post-release issues by 15% through thorough code reviews for merge requests, ensuring strict adherence to coding standards and feature specifications, which improved overall software quality. Utilized AWS services for scalable and efficient deployment, reducing deployment time by 10%. Diversified my skill set by developing RPA solutions using tools like Power Automate, collaborating with stakeholders to automate workflows and execute automated testing.',
  },
];

function Experience() {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-card">
          <h3>{experience.role} at {experience.company}</h3>
          <p>{experience.duration}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
