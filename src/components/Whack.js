import React, { useState } from "react";
import MoleGrid from "./MoleGrid";
import "./Whack.css";

export default function Whack(props) {
  const [mole, setMole] = useState();
  const [time, setTime] = useState(20);
  const [score, setScore] = useState(0);
  const [moleInterval, setMoleInterval] = useState();

  function showMole() {
    setMole(Math.floor(Math.random() * 25));
  }

  function startGame() {
    const moleInterval = setInterval(showMole, 1000);
    setMoleInterval(moleInterval);
  }

  function resetGame() {
    clearInterval(moleInterval);
    setScore(0);
    setMole();
  }

  return (
    <div className="game-container">
      <img
        src="https://www.pinclipart.com/picdir/big/571-5713366_cleveland-browns-elf-clipart.png"
        alt=""
      />
      <h1 className="top-banner">Sack-a-Steeler</h1>

      <p className="score">Sacks: {score}</p>
      <div className="array-container">
        <div>
          <MoleGrid mole={mole} setScore={setScore} />
        </div>
      </div>
      <div className="button-container">
        <button onClick={startGame} className=" start-button border">
          Start
        </button>
        <button onClick={resetGame} className="reset-button border">
          Reset
        </button>
      </div>
    </div>
  );
}
