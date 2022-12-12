import React from 'react';

const Section = ({ title, children }) => (
  <div className="feedbackSection">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;
