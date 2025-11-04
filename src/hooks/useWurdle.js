import { useState } from "react";

const useWurdle = (solution) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [turn, setTurn] = useState(0);
  const [guesses, setGuesses] = useState([...Array(6)]); // 6 guesses, initially empty
  const [history, setHistory] = useState([]); // store past guesses
  const [isCorrect, setIsCorrect] = useState(false);
  
  

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });
    formattedGuess.forEach((l, i) => {
        if(solutionArray[i]==l.key){
            formattedGuess[i].color="green";
            solutionArray[i]=null;
        }

    });
    formattedGuess.forEach((l, i) => {
        if(solutionArray.includes(l.key) && formattedGuess[i].color !== "green"){
            formattedGuess[i].color="yellow";
            solutionArray[solutionArray.indexOf(l.key)]=null;
        }
    });
    return formattedGuess;
    
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
        let newGuesses = [...prevGuesses]
        newGuesses[turn]=formattedGuess
        return newGuesses;
    });
    setHistory(prevHistory=>[...prevHistory, currentGuess]);
    setTurn(prevTurn=>prevTurn+1);
    setCurrentGuess("");
  };

  const keyupHandler = ({ key }) => {
    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        console.log("Guess must be 5 letters long");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("You've already tried that word");
        return;
      }
      if (turn >= 6) {
        console.log("No more guesses left");
        return;
      }
      const formr = formatGuess();
      addNewGuess(formr);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    // only allow letters, limit to 5
    if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key.toLowerCase());
    }

  };

  return [currentGuess, keyupHandler, guesses, turn, isCorrect];

};

export default useWurdle;
