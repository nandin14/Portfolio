import React from 'react';

const experiences = [
  {
    company: 'Vosyn',
    duration: 'May 2025 – Present',
    role: 'Full Stack Developer Intern',
    description: 'Collaborated with cross-functional teams to build responsive user interfaces using React and Redux while implementing back-end services and APIs with Node.js. Developed scalable applications using Micro Frontend (MFE) architecture, enhancing maintainability and modularity. Led a team of 8-10 members by planning and executing sprint tasks, achieving 100% on-time delivery of project milestones, and demonstrating strong teamwork and communication. Ensured high-quality code through meticulous reviews, achieving a 30% reduction in rework and post-deployment issues, significantly enhancing application stability.',
  },
  {
    company: 'University of Windsor IT Services',
    duration: 'Sep 2024 – Apr 2025',
    role: 'IT Support',
    description: 'As part of my IT support experience, I actively contributed to user lifecycle management by handling new user account creation, configuring appropriate system access permissions, and executing secure offboarding processes for exiting employees. I regularly performed critical system maintenance tasks such as software updates, health checks, and configuration adjustments to ensure optimal stability and performance across user environments. My role also involved administration and troubleshooting within Microsoft Server ecosystems (2016, 2019, 2022), including hands-on experience managing users, groups, and policies in Active Directory. Through collaboration with infrastructure and DevOps teams, I became familiar with managing virtualized environments using VMware, enhancing system provisioning and resource optimization efforts. These activities strengthened my technical problem-solving skills and deepened my understanding of enterprise IT operations in real-world settings.',
  },
  {
    company: 'Holiday Inn Express and Suites',
    duration: 'Jun 2021 – Aug 2023',
    role: 'Front Desk Receptionist',
    description: 'Provided front-line administrative support by warmly greeting and assisting guests upon arrival, ensuring a professional and welcoming first impression. Managed high-volume communications by answering phone calls, responding to emails, and accurately redirecting inquiries to the appropriate departments to facilitate prompt resolutions. Demonstrated strong multitasking abilities by balancing front-desk responsibilities with administrative tasks such as appointment scheduling, data entry, and handling time-sensitive requests. Operated a range of office equipment, including printers, copiers, and point-of-sale (POS) systems, contributing to the smooth execution of daily operations. Maintained a high standard of customer service by addressing visitor needs efficiently and courteously, helping to foster a positive client experience and support overall office workflow.'
  },
  {
    company: 'Sunflower Lab',
    duration: 'Jun 2021 – Aug 2023',
    role: 'Help Desk Specialist',
    description:'Served as the single point of contact (SPOC) for IT-related escalations, taking ownership of incidents and ensuring prompt and effective resolution of technical issues. Provided end-to-end troubleshooting support for end-users, addressing a wide range of problems including hardware failures, software errors, network connectivity issues (LAN/WAN), VPN access, and firewall configurations. Actively contributed to the development and maintenance of internal technical documentation, FAQs, and user guides to streamline support operations. Maintained an up-to-date asset inventory by accurately tracking the deployment, reassignment, and return of IT equipment. Delivered responsive, customer-focused support aligned with issue priority and organizational service level expectations, while consistently upholding high standards of technical assistance and end-user satisfaction.'
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
