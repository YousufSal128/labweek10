import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="confirmation-container">
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Province:</strong> {formData.province}</p>
        <p><strong>Postal Code:</strong> {formData.postalCode}</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1>Data Entry Form</h1>
      <form className="data-entry-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Address 2</label>
          <input type="text" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Province</label>
            <select name="province" value={formData.province} onChange={handleChange}>
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              {/* Add other provinces as needed */}
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
          </div>
        </div>

        <div className="form-footer">
          <input type="checkbox" required />
          <label>Agree Terms & Conditions?</label>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default App;