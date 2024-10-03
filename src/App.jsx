import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./App.css";

const flashcardsData = [
  {
    question: "What is React?",
    answer: "A Javascript library for building UIs",
  },
  { question: "What is JSX?", answer: "A syntax extension for Javascript" },
  { question: "What is a component?", answer: "Reusable pieces of UI" },
  {
    question: "What is a hook in React?",
    answer: "Special functions for using state and lifecycle features",
  },
];

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };

  const previousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcardsData.length - 1 : prevIndex - 2
    );
  };

  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <div className="flashcard-container">
        <Flashcard card={flashcardsData[currentCardIndex]} />
      </div>
      <div className="buttons">
        <button onClick={previousCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
};

export default App;
