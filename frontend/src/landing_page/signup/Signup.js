import React, { useState } from "react";
import axios from "axios";
function Signup() {
  return (
    <div className="container p-3  " style={{ color: "#424242" }}>
      <div className="row mb-5 mt-3 text-center">
        <h2>Open a free demat and trading account online</h2>
        <p className="fs-4 text-muted mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row mb-5">
        <div className="col"></div>
        <div className="col-5 text-center  p-5">
          <img src="media/images/account_open.svg" />
        </div>
        <div className="col-5 mt-5">
          <h2>Sign up now</h2>
          <p>Create an account to access the dashboard</p>
          <SignupForm />
        </div>
        <div className="col"></div>
      </div>
  );
}



function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://mern-trading-platform-j9bk.onrender.com/signup",
        { name, email, password },
        { withCredentials: true }
      );
      if (res.data.success) {
        window.location.href = "https://mern-trading-platform-dashboard.netlify.app";
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-danger">{error}</p>}
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
}

export default Signup;
