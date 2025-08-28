import { useState } from "react";

const TicTacToe = () => {
  const sides = 4;
  const createboard = () => {
    return Array.from({ length: sides }, () => new Array(sides).fill(null));
  };
  const [board, setBoard] = useState(createboard());
  const [isXNext, setIsXNext] = useState(true);

  const updateBox = (rowIndex, colIndex) => {
    if (isXNext) {
      board[rowIndex][colIndex] = "X";
    } else {
      board[rowIndex][colIndex] = "O";
    }
    setIsXNext(!isXNext);
    setBoard([...board]);
    const winner = calculateWinner(rowIndex, colIndex);
    if (winner) {
      alert(`Winner is: ${winner}`);
      setBoard(new Array(sides * sides).fill(null)); // Reset the board
      setIsXNext(true); // Reset to X's turn
    }
  };

  const calculateWinner = (rowIndex, colIndex) => {
    //along row
    if (board[rowIndex].every((value) => value === "X")) {
      return "X";
    }
    if (board[rowIndex].every((value) => value === "O")) {
      return "O";
    }

    //along column
    if (board.every((row) => row[colIndex] === "X")) {
      return "X";
    }
    if (board.every((row) => row[colIndex] === "O")) {
      return "O";
    }

    //along diagonal
    if (
      board.every((row, index) => row[index] === "X") ||
      board.every((row, index) => row[sides - 1 - index] === "X")
    ) {
      return "X";
    }
    if (
      board.every((row, index) => row[index] === "O") ||
      board.every((row, index) => row[sides - 1 - index] === "O")
    ) {
      return "O";
    }

    return null
  };

  return (
    <div className="ticTacToeContainer">
      <h1 className="ticTacToeHeading">Tic Tac Toe</h1>
      <div className="ticTacToeInfo">
        <p>Next Turn : {isXNext ? "X" : "O"}</p>
      </div>
      <div
        className="ticTacToeBoard"
        style={{
          gridTemplateColumns: `repeat(${sides}, 1fr)`,
          gridTemplateRows: `repeat(${sides}, 1fr)`,
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((value, colIndex) => {
            return (
              <div
                className="box"
                onClick={() => updateBox(rowIndex, colIndex)}
              >
                {value}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
