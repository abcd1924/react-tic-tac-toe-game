import React from 'react';
import "./App.css"
const { useState } = React;

export default function Board() {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [turn, setTurn] = useState(0);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const handleOnClick = (index) => {

    if (winner || gameFinished) {
      return;
    }

    setTurn(prevTurn => prevTurn + 1);

    const nextSquare = [...square];
    nextSquare[index] = turn % 2 === 0 ? "X" : "O";

    setSquare(nextSquare);

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (nextSquare[a] && nextSquare[b] && nextSquare[c] && nextSquare[a] === nextSquare[b] && nextSquare[a] === nextSquare[c]) {
        setWinner(nextSquare[a]);
        setGameFinished(true);
        return;
      }
    }

    if (nextSquare.every(square => square !== null) && !winner) {
      setGameFinished(true);
      setIsDraw(true);
      return;
    }
  }

  const resetGame = () => {
    setSquare(Array(9).fill(null));
    setGameFinished(false);
    setWinner(null);
    setTurn(0);
    setIsDraw(false);
  }

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (isDraw) {
    status = "It's a Draw!";
  }

  return (
    <div className='game-wrapper'>
      <div className="grid-container">
        {square.map((value, index) => {
          return (
            <button
              key={index}
              className='square'
              onClick={() => handleOnClick(index)}
              disabled={value !== null}
              style={{ color: value === 'X' ? 'var(--x-color)' : 'var(--o-color)' }}
            >
              {value}
            </button>
          )
        })}
      </div>

      <div className='status-text'>
        <h3>{status}</h3>
      </div>

      <button id="reset" onClick={resetGame}>Reset Game</button>
    </div>
  )
}
