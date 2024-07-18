import React, { useState } from 'react';
import './App.css';
import PersonalForm from './components/Personalcomponent';
import EducationSection from './components/education';
import ExperienceSection from './components/ExperienceSection';
import ResumePreview from './components/ResumePreview';

function App() {
  const [resumeData, setResumeData] = useState({
    personal: {},
    education: [],
    experience: [],
  });

  const handlePersonalSubmit = (data) => {
    setResumeData((prev) => ({ ...prev, personal: data }));
  };

  const handleEducationSubmit = (data) => {
    setResumeData(prev => ({ ...prev, education: [...prev.education, data] }));
  };

  const handleEducationDelete = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const handleExperienceSubmit = (data) => {
    setResumeData(prev => ({ ...prev, experience: [...prev.experience, data] }));
  };

  const handleExperienceDelete = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h1>Resume Builder</h1>
        <nav>
          <ul>
            <li><a href="#personal">Personal Info</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <div className="form-container">
          <section id="personal">
            <h2>Personal Information</h2>
            <PersonalForm onSubmit={handlePersonalSubmit} />
          </section>
          <section id="education">
            <h2>Education</h2>
            <EducationSection onSubmit={handleEducationSubmit} onDelete={handleEducationDelete} />
          </section>
          <section id="experience">
            <h2>Experience</h2>
            <ExperienceSection onSubmit={handleExperienceSubmit} onDelete={handleExperienceDelete} />
          </section>
        </div>
      </div>
      <div className="resume-preview-container">
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
}

export default App;
