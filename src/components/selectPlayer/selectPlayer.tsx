import React from "react";
import "./selectPlayer.css";

interface PlayerInterface {
  player1: string;
  player2: string;
  disabled:boolean;
  initialPlayerIndex:string;
  handlePlayer1Selection: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePlayer2Selection: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInitialPlayerIndex: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const PlayerSelection = ({
  player1,
  player2,
  handlePlayer1Selection,
  handlePlayer2Selection,handleInitialPlayerIndex,initialPlayerIndex,disabled=false
}: PlayerInterface) => {
  function checkError() {
    return player1 === player2 ? (
      'Both player cannot be same!!'
    ) : (
      'Select first player'
    );
  }
  return (
    <div className="selection">
      <div className="player-input">
        <input
        disabled={disabled}
          className="player1"
          type="text"
          value={player1}
          maxLength={1}
          onChange={handlePlayer1Selection}
        />
        <input
         disabled={disabled}
          className="player2"
          type="text"
          value={player2}
          maxLength={1}
          onChange={handlePlayer2Selection}
        />
      </div>
      <h4 className="error">{checkError()}</h4>
      
      <div className="radio-button">
        <input
         disabled={player1 === player2 || disabled}
          type="radio"
          name="initialPlayer"
          value={'1'}
          onChange={handleInitialPlayerIndex}
          checked={initialPlayerIndex === '1'}
        />{" "}
        {player1}{" "}
        <input
         disabled={player1 === player2 || disabled} 
          type="radio"
          name="initialPlayer"
          value={'2'}
          onChange={handleInitialPlayerIndex}
          checked={initialPlayerIndex === '2'}
        />{" "}
        {player2}
      </div>
    </div>
  );
};
export default PlayerSelection;
