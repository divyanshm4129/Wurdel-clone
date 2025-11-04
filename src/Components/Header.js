import React from "react";
import { Link } from "react-router-dom";

import image from '../assets/logoo.png'


function Rules() {
  return (
    <div className="rules-page">
      <h1>Welcome to Wurdle Clone!</h1>
      <p>
        🎯 <strong>How to play:</strong><br />
        - Guess the 5-letter word in 6 tries.<br />
        - Each guess must be a valid word.<br />
        - After each guess, the tile colors change to show how close your guess was.<br /><br />
        🟩 Green → correct letter & correct position.<br />
        🟨 Yellow → correct letter, wrong position.<br />
        ⬜ Gray → letter not in the word.
      </p>

      <Link to="/game">
        <button className="start-button">Start Game</button>
      </Link>
    </div>
  );
}

export default Rules;
