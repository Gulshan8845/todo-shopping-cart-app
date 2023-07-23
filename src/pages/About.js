import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>
      <p className="about-description">We are a team of developers working on this project.</p>
      <style>
        {`
        .about-container {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 5px;
        }

        .about-heading {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .about-description {
          font-size: 16px;
        }
        `}
      </style>
    </div>
  );
};

export default About;
