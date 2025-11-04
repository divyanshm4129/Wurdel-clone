import React, { useEffect, useState } from 'react';
import useWurdle from '../hooks/useWurdle';
import Grid from './Grid';
import Modal from './Modal';
import image from '../assets/logoo.png';
import kiss from '../assets/kiss.mp4';

export default function Wurdle({ solution }) {
  const [currentGuess, keyupHandler, guesses, turn, isCorrect] = useWurdle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", keyupHandler);
    return () => window.removeEventListener("keyup", keyupHandler);
  }, [keyupHandler]);

  useEffect(() => {
    if (isCorrect || turn >= 6) {
      setTimeout(() => setShowModal(true), 2000);
    }
  }, [isCorrect, turn]);

  return (
    <div className="game-container">
      
      <div className="image-section">
        <img src={image} alt="Wurdle Logo" className="game-logo" />
        <h3>GOOD LUCK!</h3>
      </div>

      <div className="game-section">
        {solution}
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} onClose={() => setShowModal(false)} />}
      </div>
        <button className="restart-btn" onClick={() => window.location.reload()}>🔁 Restart Game
        </button>

    </div>
  );
}
