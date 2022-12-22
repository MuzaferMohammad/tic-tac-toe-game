import "./square.css";
/** SquareProps encapsulates the type of props received byb squareProps */
export type SquareProps = {
  symbol: string;
  handleClick: () => void;
  winner: boolean;
};
function Square({ symbol, handleClick, winner = false }: SquareProps) {
  return (
    <div className={winner ? "square winner" : "square"} onClick={handleClick}>
      {symbol}
    </div>
  );
}
export default Square;
