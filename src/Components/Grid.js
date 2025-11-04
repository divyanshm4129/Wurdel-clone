import React from 'react';
import Rows from './Rows';

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div className="grid">
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Rows key={i} currentGuess={currentGuess} />;
        }
        return <Rows key={i} guess={g} />;
      })}
    </div>
  );
}
