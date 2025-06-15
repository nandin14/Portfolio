import React from 'react';

const skills = {
  'Tools': ['Office 365', 'Active Directory', 'Linux', 'Jira', 'ServiceNow', 'Excel', 'Word'],
  'Cloud Services': ['Amazon Web Services (AWS)', 'Azure'],
  'Networking': ['DNS', 'DHCP', 'Firewall', 'VPNs', 'TCP/IP'],
  'Virtualization': ['VMware', 'VirtualBox'],
  'Soft Skills': ['Customer Support', 'Written and Verbal Communication']
};

function Skills() {
  return (
    <div className="skills">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      {Object.entries(skills).map(([category, items], index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-lg">{category}</h3>
          <ul className="list-disc list-inside ml-4">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
