import React from "react";
import Board from "../board/board";
import StepList from "../stepList/steplist";
import "./game.css";
import { findWinner } from "../../utils/tic-tac-toe-logic";
import PlayerSelection from "../selectPlayer/selectPlayer";

const Game = () => {
  const [player1, setPlayer1] = React.useState("X");
  const [player2, setPlayer2] = React.useState("O");
  const [selectedStep, setSelectedStep] = React.useState(0);
  const [history, setHistory] = React.useState<Array<string[]>>([
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  ]);
  const [initialPlayerIndex, setInitialPlayerIndex] = React.useState("1");
  const currentBoard: string[] = history[selectedStep];

  function getInitialPlayer() {
    if (initialPlayerIndex === "1") {
      return player1;
    } else {
      return player2;
    }
  }

  function getAlternatePlayer() {
    if (initialPlayerIndex === "2") {
      return player1;
    } else {
      return player2;
    }
  }

  function handleSquare(squareIndex: number) {
    //Get the most recent history
    const recentBoard = history[selectedStep];
    const newBoard: string[] = [...recentBoard];
    newBoard[squareIndex] = selectedStep%2===0 ? getInitialPlayer() : getAlternatePlayer();
    const historyUntilSelection = history.slice(0, selectedStep + 1);
    setHistory([...historyUntilSelection, newBoard]);
    setSelectedStep(historyUntilSelection.length);
  }

  function handlePlayer1Selection(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayer1(event.target.value.toUpperCase());
  }

  function handlePlayer2Selection(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayer2(event.target.value.toUpperCase());
  }

  function handleStep(step: number) {
    setSelectedStep(step);
  }

  function handleInitialPlayerIndex(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    setInitialPlayerIndex(event.target.value.toUpperCase());
  }

  const disabled=(selectedStep>0)

  const winner = findWinner(history[selectedStep]);
  const gameStatus = winner
    ? `${winner} won the game!!`
    : `Next player: ${getInitialPlayer() === player1 ? player2 : player1}`;

  return (
    <div className="game">
      <div>
        <PlayerSelection
          initialPlayerIndex={initialPlayerIndex}
          player1={player1}
          player2={player2}
          handlePlayer1Selection={handlePlayer1Selection}
          handlePlayer2Selection={handlePlayer2Selection}
          handleInitialPlayerIndex={handleInitialPlayerIndex}
          disabled={disabled}
        />
    <p className="first"> Player 1 : {player1}</p>
    <p className="first"> Player 2 : {player2}</p>
    <p className="first">Initial Player : {getInitialPlayer()}</p>
        <Board boardState={currentBoard} handelSquare={handleSquare} />
        <h4>{gameStatus}</h4>
      </div>
      <StepList
        selectedStep={selectedStep}
        numberOfSteps={history.length}
        handleStep={handleStep}
      />
    </div>
  );
};

export default Game;
