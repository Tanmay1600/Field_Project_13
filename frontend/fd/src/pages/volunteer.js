import React, { useState } from 'react';
import '../styles/volunteer.css';

function VolunteerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
    
    // Close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="volunteer-modal-overlay">
      <div className="volunteer-modal">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        
        <h2>Join as a volunteer</h2>
        
        <p className="modal-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius enim in eros elementum tristique.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerModal;