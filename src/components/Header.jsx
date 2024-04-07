import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import LoginForm from "./Login";
import SignupForm from "./Signup";
import axios from "axios";

function Header() {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState("login");
  const [user, setUser] = useState({});
  const url = process.env.API_URL;

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(`${url}/user/login`, formData);
      setUser(response.data);
      setShow(false);
      alert(`Welcome ${response?.data?.name} You are Logged In.`);
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleSignup = async (formData) => {
    try {
      const response = await axios.post(`${url}/user/register`, formData);
      setUser(response?.data);
      setShow(false);
      alert(`Welcome ${response?.data?.name} You are registered.`);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="header">
      <div className="topbar">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="" />
          </a>
        </div>
        <div className="header-right">
          {!user?.token ? (
            <button className="button login-btn" onClick={() => setShow(true)}>
              LOGIN
            </button>
          ) : (
            <button className="button login-btn" onClick={() => setUser({})}>
              LOGOUT
            </button>
          )}
          <div className="button country">
            <p>INDIA</p>
            <img
              src="https://cdn.countryflags.com/thumbs/india/flag-round-250.png"
              alt=""
            />
            <p>v</p>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <CloseButton onClick={() => setShow(false)} />
          <div className="modal-left">
            <h3>Why Sign up?</h3>
            <ul>
              <li>Exclusive deals</li>
              <li>More Savings</li>
              <li>Over 50 Stores</li>
              <li>Over 100 Categories</li>
            </ul>
          </div>
          <div className="modal-right">
            <div className="signup-tab">
              <h2 className="loginBtn" onClick={() => setTab("login")}>
                LOGIN
              </h2>
              <span className="seperator">|</span>
              <h2 className="singupBtn" onClick={() => setTab("signup")}>
                SIGNUP
              </h2>
            </div>
            {tab === "login" ? (
              <LoginForm onLogin={handleLogin} />
            ) : (
              <SignupForm onSignup={handleSignup} />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
