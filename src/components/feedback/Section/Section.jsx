import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={css.feedbackSection}>
    <h2 className={css.feedbackSectionTitle}>{title}</h2>
    {children}
  </div>
);

export default Section;
