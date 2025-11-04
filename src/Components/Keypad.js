import React from 'react'

export default function Keypad({usedKeys}) {
    const[letters, setLetters] = React.useState([
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ]);
    
  return (
    <div className='keypad'>
        {letters&& letters.map((letter, index) => {
            const color = usedKeys[letter.toLowerCase()];
            return (
            <button key={index} className= {`keypad-button ${color}`}>{letter}</button>)
        })}

      
    </div>
  )
}
