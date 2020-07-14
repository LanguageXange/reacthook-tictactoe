import React from "react";
const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "60px",
  fontWeight: "900",
  cursor: "pointer",
  outline: "none",
  width: "100%",
  height: "100%",
  color: "tomato",
};
export const Square = ({ onClick, value }) => {
  return (
    <div>
      {" "}
      <button style={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
