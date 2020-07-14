import React, { useState } from "react";
import { Board } from "./Board";
import { calculateWinner } from "./helper";

const style = {
  width: "500px",
  margin: "5px auto",
  fontSize: "50px",
  textAlign: "center",
};
export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    // this is a shallow copy
    const boardCopy = [...board];
    // return if user win or click on occupied square
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  // const jumpTo = () => {};

  const renderMoves = () => {
    return (
      <button
        style={{
          fontSize: "32px",
          borderRadius: "10px",
          outline: "none",
          boxShadow: "5px 5px 8px 5px grey",
          backgroundColor: "gold",
          border: "1px solid yellow",
          cursor: "pointer",
        }}
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Start Again
      </button>
    );
  };

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p>
          {" "}
          {winner
            ? `Winner is ${winner} !`
            : !board.includes(null)
            ? "Phew! It's a tie!"
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        <p> {renderMoves()}</p>
      </div>
    </div>
  );
};
