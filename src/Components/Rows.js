import React from 'react';

export default function Rows({ guess, currentGuess }) {
  if (guess) {
    // ✅ finalized (colored) guess
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className= {l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split('');
    let empty = Array(5 - letters.length).fill(null);

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {empty.map((_, i) => (
          <div key={i} ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div ></div>
      <div ></div>
      <div ></div>
      <div></div>
      <div ></div>
      
    
    </div>
  );
}
