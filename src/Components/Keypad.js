import React from "react";

export default function Keypad({ usedKeys, onKeyPress }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="keypad">
      {letters.map((letter, index) => {
        const color = usedKeys?.[letter.toLowerCase()] || "";
        return (
          <button
            key={index}
            className={`keypad-button ${color}`}
            onClick={() => onKeyPress(letter)}
          >
            {letter}
          </button>
        );
      })}

      <button
        className="keypad-button backspace-button"
        onClick={() => onKeyPress("Backspace")}
      >
        ⌫
      </button>

      <button
        className="keypad-button enter-button"
        onClick={() => onKeyPress("Enter")}
      >
        Enter
      </button>
    </div>
  );
}
