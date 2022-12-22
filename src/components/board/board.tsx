import { findWinner, findWinnerSequence } from "../../utils/tic-tac-toe-logic";
import Square from "../square/square";
import "./board.css";

/**props of Board component */
interface BoardProps {
  boardState?: string[];
  handelSquare?: (index: number) => void;
}

function Board({
  boardState = [" ", " ", " ", " ", " ", " ", " ", " "],
  handelSquare = () => {},
}: BoardProps) {
  function handleClickInSquare(squareIndex: number) {
    const winner = findWinner(boardState);
    if (winner) {
      return;
    }
    if (boardState[squareIndex] === " ") {
      handelSquare(squareIndex);
    }
  }

  const winningSequence = findWinnerSequence(boardState);
  return (
    <div className="board">
      <div className="board-row">
        <Square
          symbol={boardState[0]}
          handleClick={() => handleClickInSquare(0)}
          winner={winningSequence.includes(0)}
        />
        <Square
          symbol={boardState[1]}
          handleClick={() => handleClickInSquare(1)}
          winner={winningSequence.includes(1)}
        />
        <Square
          symbol={boardState[2]}
          handleClick={() => handleClickInSquare(2)}
          winner={winningSequence.includes(2)}
        />
      </div>
      <div className="board-row">
        <Square
          symbol={boardState[3]}
          handleClick={() => handleClickInSquare(3)}
          winner={winningSequence.includes(3)}
        />
        <Square
          symbol={boardState[4]}
          handleClick={() => handleClickInSquare(4)}
          winner={winningSequence.includes(4)}
        />
        <Square
          symbol={boardState[5]}
          handleClick={() => handleClickInSquare(5)}
          winner={winningSequence.includes(5)}
        />
      </div>
      <div className="board-row">
        <Square
          symbol={boardState[6]}
          handleClick={() => handleClickInSquare(6)}
          winner={winningSequence.includes(6)}
        />
        <Square
          symbol={boardState[7]}
          handleClick={() => handleClickInSquare(7)}
          winner={winningSequence.includes(7)}
        />
        <Square
          symbol={boardState[8]}
          handleClick={() => handleClickInSquare(8)}
          winner={winningSequence.includes(8)}
        />
      </div>
    </div>
  );
}
export default Board;
