import React, { useState } from "react";

const SignupForm = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      onSignup(formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-input">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`${errors.name ? "input-error" : ""}`}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="login-input">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`${errors.email ? "input-error" : ""}`}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="login-input">
        <input
          type="tel"
          placeholder="Mobile Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className={`${errors.phoneNumber ? "input-error" : ""}`}
        />
        {errors.phoneNumber && (
          <span className="error">{errors.phoneNumber}</span>
        )}
      </div>
      <div className="login-input">
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className={`${errors.password ? "input-error" : ""}`}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="login-input">
        <input
          type="password"
          placeholder="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className={`${errors.confirmPassword ? "input-error" : ""}`}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>
      <button type="submit" className="button submit-btn">
        REGISTER
      </button>
    </form>
  );
};

export default SignupForm;
