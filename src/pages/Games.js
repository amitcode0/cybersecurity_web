import React from "react";
import Quiz from "../components/Quiz";
import PhishingGame from "../components/PhishingGame";
import "./Games.css"; // Ensure styles are applied

const Games = () => {
  return (
    <div className="games-container">
      <h1 className="games-title">🔐 Cybersecurity Games</h1>

      {/* 1️⃣ Phishing Attack Simulation */}
      <section className="game-section">
        <h2>1️⃣ Phishing Attack Simulation 🎣</h2>
        <PhishingGame />
      </section>

      {/* 2️⃣ Cybersecurity Quiz */}
      <section className="game-section">
        <h2>2️⃣ Cybersecurity Quiz 🧠</h2>
        <Quiz />
      </section>
    </div>
  );
};

export default Games;
