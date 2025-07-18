import React from 'react';

const experiences = [
  {
    company: 'Vosyn',
    duration: 'Jan 2025 – Present',
    role: 'IT Support Specialist',
    description: 'Collaborated with cross-functional teams to build responsive user interfaces using React and Redux while implementing back-end services and APIs with Node.js. Developed scalable applications using Micro Frontend (MFE) architecture, enhancing maintainabi',
    description:'Provided Tier 1 and 2 support to 150+ users, including issues related to Active Directory, hardware diagnostics, and troubleshooting across Windows, Office 365, and mobile devices. Ensured timely support aligned with SLAs and maintained high customer satisfaction. Gained hands-on experience with basic networking concepts such as IP addressing, DNS resolution, DHCP lease renewal, and VLAN tagging while assisting in infrastructure support and workstation provisioning.'
  },
  {
    company: 'University of Windsor IT Services',
    duration: 'Sep 2024 – Dec 2024',
    role: 'Administrative Assistant',
    description:'Administered and supported Microsoft 365 suite, including Exchange Online, SharePoint, and Teams, improving collaboration and uptime across departments Performed patching, system updates, and configuration for secure and stable operations using VMware. Supported project planning by helping estimate resource needs, compiling reports, and tracking deadlines for departments. Assisted in database and document management, ensuring accurate input and filing of student and equipment records.'
  },
  {
    company: 'Sunflower Lab',
    duration: 'Jun 2021 – Aug 2024',
    role: 'RPA & Automation Specialist',
    description:'Created automated solutions using Power Automate to reduce manual clerical tasks such as email reminders, data transfer, and Excel-based updates, resulting in a 40% reduction in IT tickets. Developed Bash scripts for automating server health checks, log archiving, and account permission audits, streamlining daily system maintenance processes, and reducing manual workload by 30%. Implemented real-time ticket handling and automated solutions for standard L1 issues like password resets and access requests, reducing manual work by up to 60% and improving response time.'
  }
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
