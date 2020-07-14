import React from "react";
import { Square } from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "550px",
  height: "500px",
  margin: "4rem auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};
// implicit return
export const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);
