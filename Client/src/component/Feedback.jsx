import React, { useState } from 'react';
import "./Feedback.css"

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
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
    // Handle form submission - you can send the formData to your backend or perform any other actions here
    console.log(formData);
    // Optionally, reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      category: '',
      message: ''
    });
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select a category</option>
            <option value="General">General</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
