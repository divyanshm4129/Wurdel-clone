import React from 'react';
import kiss from '../assets/kiss.mp4';
import smirk from '../assets/smirk.mp4';

export default function Modal({ isCorrect, turn, solution, onClose }) {
  if (isCorrect) {
    return (
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✖</button>

        <video autoPlay loop muted className="background-video">
          <source src={kiss} type="video/mp4" />
        </video>

        <p>YIPPE YOU WIN! 🎉</p>
        <p className="solution">{solution.toUpperCase()}</p>
        <p>You found the solution in {turn} guesses!</p>
      </div>
    );
  }

  if (turn >= 6) {
    return (
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✖</button>

        <video autoPlay loop muted className="background-video">
          <source src={smirk} type="video/mp4" />
        </video>

        <p>GAME OVER 😢</p>
        <p className="solution">
          The correct word was {solution.toUpperCase()}
        </p>
      </div>
    );
  }

  return null;
}
