import React, { useEffect, useState } from 'react';
import './App.css';
import Wurdle from './Components/Wurdle';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from './Components/Game';


function App() {
  const [solution, setSolution] = useState("");

  useEffect(() => {
    fetch("http://localhost:4001/solutions")
      .then((response) => response.json())
      .then((data) => {
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution.word);

      })
      .catch((error) => console.error("Error fetching solutions:", error));
  }, []);

  return (
    <Router>  
      <Routes>
        <Route path="/" element = {<Header/>} />
        <Route path="/game" element = {<Wurdle solution={solution} />} />
      </Routes>

    </Router>

    

  );
}

export default App;
