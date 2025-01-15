import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InterestRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: formData });  // Use absolute path for clarity
  };

  return (
    <div className="container">
      <h1>Register Your Interest</h1>
      <p>Please register the course you are interested in!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            placeholder="Enter your course of interest"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

    </div>
  );
}
