import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard" onClick={flipCard}>
      {isFlipped ? card.answer : card.question}
    </div>
  );
};

export default Flashcard;
