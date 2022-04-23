import { useState } from "react";

const Dice = () => {
  const [dice1, setDice1] = useState(
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_1-512.png"
  );
  const [dice2, setDice2] = useState(
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_1-512.png"
  );

  const possibilities = [
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_1-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_2-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_3-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_4-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_5-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_6-512.png",
  ];

  const handleRoll = async () => {
    const roll = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(
            setDice1(possibilities[Math.floor(Math.random() * 6)]),
            setDice2(possibilities[Math.floor(Math.random() * 6)])
          );
          rej((err) => console.log("ship has sunk", err));
        }, 200);
      });
    };
    for (let i = 0; i < 20; i++) {
      await roll();
    }
  };

  return (
    <div className="dice-container">
      <div className="dice">
        <img src={dice1} alt="" />
        <img src={dice2} alt="" />
      </div>
      <button onClick={() => handleRoll()}>ROLL DICE</button>
    </div>
  );
};

export default Dice;
