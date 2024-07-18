import React, { useState } from 'react';
import './education.css';

function EducationSection({ onSubmit, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [educations, setEducations] = useState([]);
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEducation = { ...formData, id: Date.now() };
    onSubmit(newEducation);
    setEducations([...educations, newEducation]);
    setFormData({
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
    setIsFormVisible(false);
  };

  const handleDelete = (id) => {
    const updatedEducations = educations.filter(edu => edu.id !== id);
    setEducations(updatedEducations);
    onDelete(id);
  };

  return (
    <div className="education-section">
      <div className="section-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h2>
          <i className="icon-graduation-cap"></i> Education
        </h2>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </div>
      {isExpanded && (
        <>
          <div className="education-list">
            {educations.map((edu) => (
              <div key={edu.id} className="education-item">
                <p>{edu.institution} - {edu.degree}</p>
                <button className="delete-button" onClick={() => handleDelete(edu.id)}>Delete</button>
              </div>
            ))}
          </div>
          {!isFormVisible && (
            <button className="add-education-button" onClick={() => setIsFormVisible(true)}>
              + Education
            </button>
          )}
          {isFormVisible && (
            <form className="education-form" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="institution">Institution:</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="degree">Degree:</label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  value={formData.degree}
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
              <button type="submit">Submit</button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default EducationSection;