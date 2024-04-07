import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      onLogin(formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={`${errors.password ? "input-error" : ""}`}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-info">
          <div>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <span>Forgot Your Password?</span>
        </div>
        <button type="submit" className="button submit-btn">
          LOGIN
        </button>
      </form>
      <div className="division"></div>
      <div className="socials">
        <button className="social-btn google">
          <img src="./google.png" alt="" />
          LOGIN WITH GOOGLE
        </button>
        <button className="social-btn facebook">
          <img src="./facebook.png" alt="" />
          LOGIN WITH FACEBOOK
        </button>
        <span>SIGN IN AND GET UPDATED !</span>
      </div>
    </div>
  );
};

export default LoginForm;
