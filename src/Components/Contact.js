import React from 'react';

function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:nandinidalal02@gmail.com?subject=Job Opportunity&body=Hi Nandini,";
  };

  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      <p>I'm currently open to new opportunities. Feel free to reach out via email or LinkedIn.</p>
    </div>
  );
}

export default Contact;
