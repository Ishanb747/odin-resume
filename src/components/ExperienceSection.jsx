import React, { useState } from 'react';
import './experience.css';

function ExperienceSection({ onSubmit, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newExperience = { ...formData, id: Date.now() };
    onSubmit(newExperience);
    setExperiences([...experiences, newExperience]);
    setFormData({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    });
    setIsFormVisible(false);
  };

  const handleDelete = (id) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== id);
    setExperiences(updatedExperiences);
    onDelete(id);
  };

  return (
    <div className="experience-section">
      <div className="section-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h2>
          <i className="icon-briefcase"></i> Experience
        </h2>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </div>
      {isExpanded && (
        <>
          <div className="experience-list">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <p>{exp.company} - {exp.position}</p>
                <button className="delete-button" onClick={() => handleDelete(exp.id)}>Delete</button>
              </div>
            ))}
          </div>
          {!isFormVisible && (
            <button className="add-experience-button" onClick={() => setIsFormVisible(true)}>
              + Experience
            </button>
          )}
          {isFormVisible && (
            <form className="experience-form" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="company">Company Name:</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="position">Position Title:</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="startDate">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="endDate">End Date:</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default ExperienceSection;