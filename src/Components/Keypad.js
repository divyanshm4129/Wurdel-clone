import React from "react";

export default function Keypad({ usedKeys, onKeyPress }) {
  const rows = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    ["Backspace", ..."ZXCVBNM".split(""), "Enter"],
  ];

  return (
    <div className="keypad">
      {rows.map((row, rIndex) => (
        <div key={rIndex} className="keypad-row">
          {row.map((key, i) => {
            const color =
              key !== "Enter" && key !== "Backspace"
                ? usedKeys?.[key.toLowerCase()] || ""
                : "";

            const label =
              key === "Backspace" ? "⌫" : key === "Enter" ? "Enter" : key;

            return (
              <button
                key={i}
                className={`keypad-button ${
                  key === "Enter" || key === "Backspace"
                    ? `${key.toLowerCase()}-button`
                    : color
                }`}
                onClick={() => onKeyPress(key)}
              >
                {label}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
