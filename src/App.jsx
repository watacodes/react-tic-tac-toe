import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./GameBoard";
import Result from "./Result";
import Turn from "./Turn";

const winCondition = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [xSelected, setXSelected] = useState([]);
  const [ySelected, setYSelected] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!result) {
      if (xSelected.length >= 3) {
        for (const c of winCondition) {
          console.log("x: ", xSelected);
          if (c.every((i) => xSelected.includes(i))) {
            setResult("Player 1");
            return;
          }
        }
      }

      if (ySelected.length >= 3) {
        for (const c of winCondition) {
          console.log("y: ", ySelected);
          if (c.every((i) => ySelected.includes(i))) {
            setResult("Player 2");
            return;
          }
        }
      }

      if (xSelected.length + ySelected.length === 9) {
        console.log(xSelected, ySelected);
        setResult("draw");
      }
    }
  }, [xSelected, ySelected, result]);

  const handleOnClick = (item) => {
    if (result) return;

    if (
      currentPlayer === "X" &&
      !xSelected.includes(Number(item)) &&
      !ySelected.includes(Number(item))
    ) {
      setXSelected((prevX) => [...prevX, Number(item)]);
      setCurrentPlayer("Y");
    }

    if (
      currentPlayer === "Y" &&
      !xSelected.includes(Number(item)) &&
      !ySelected.includes(Number(item))
    ) {
      setYSelected((prevY) => [...prevY, Number(item)]);
      setCurrentPlayer("X");
    }
  };
  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      {!result && <Turn currentPlayer={currentPlayer} />}
      <GameBoard
        onHandle={handleOnClick}
        xSelected={xSelected}
        ySelected={ySelected}
      />
      {result && <Result result={result} />}
    </main>
  );
}

export default App;
