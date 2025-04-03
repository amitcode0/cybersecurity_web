import React, { useState } from "react";
import "./PhishingGame.css";

const PhishingSimulation = () => {
  const [emailOpened, setEmailOpened] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleOpenEmail = () => {
    setEmailOpened(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      "⚠️ ALERT! Your credentials have been stolen! This was a phishing attack."
    );
  };

  return (
    <div className="phishing-container">
      <h2>Phishing Attack Simulation 🎣</h2>

      {!emailOpened ? (
        <div className="email-box">
          <p>
            <strong>From:</strong> security@banking.com
          </p>
          <p>
            <strong>Subject:</strong> Urgent: Verify Your Account Now!
          </p>
          <p>
            We detected unusual activity on your account. Click below to verify
            your identity.
          </p>
          <button onClick={handleOpenEmail} className="open-email-btn">
            Open Email
          </button>
        </div>
      ) : (
        <div className="fake-login">
          <h3>Secure Banking Login</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}

      {message && <p className="alert-message">{message}</p>}
    </div>
  );
};

export default PhishingSimulation;
