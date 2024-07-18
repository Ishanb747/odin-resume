// components/ResumePreview.js
import React from 'react';
import './ResumePreview.css';

function ResumePreview({ data }) {
  const { personal, education, experience } = data;

  return (
    <div className="resume-preview">
      <header className="resume-header">
        <h1>{personal.name}</h1>
        <p>{personal.email} | {personal.pno} | {personal.address}</p>
      </header>
      
      <section className="resume-section">
  <h2>Education</h2>
  {education.map((edu, index) => (
    <div key={index} className="resume-item">
      <div className="resume-item-header">
        <h3>{edu.institution}</h3>
        <p className="resume-date">{edu.startDate} - {edu.endDate}</p>
      </div>
      <p className="resume-degree">{edu.degree}</p>
    </div>
  ))}
</section>
      
<section className="resume-section">
  <h2>Professional Experience</h2>
  {experience.map((exp, index) => (
    <div key={index} className="resume-item">
      <div className="resume-item-header">
        <h3>{exp.company}</h3>
        <p className="resume-date">{exp.startDate} - {exp.endDate}</p>
      </div>
      <p className="resume-position">{exp.position}</p>
      <p className="resume-description">{exp.description}</p>
    </div>
  ))}
</section>
    </div>
  );
}

export default ResumePreview;