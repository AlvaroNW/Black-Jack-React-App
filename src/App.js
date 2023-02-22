
import './App.css';

import { useState } from "react";
import CardIcon from "./Cardset";
import { getRandomCard } from "./cards";


export default function App() {
  const [card, setCard] = useState(getRandomCard());
  // console.log(card);

  const setRandomCard = () => {
    const newCard = getRandomCard();
    setCard(newCard);
  };

  return (
    <div>
      <button type="button" onClick={setRandomCard}>
        New Card{" "}
      </button>
      <CardIcon value={card} />
    </div>
  );
}
