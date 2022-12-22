import { findWinner, findWinnerSequence } from "./tic-tac-toe-logic";

describe("Tic tac toe logic tests", () => {
  test("a winner", () => {
    const boardState = [
      "O",
      "O",
      "O",
      "X",
      "O",
      "O",
      "O",
      " ",
      " ",
      " ",
    ] as string[];
    const result = findWinner(boardState);
    expect(result).toBe("O");
  });
  test("No winner", () => {
    const boardState = [
      "O",
      "X",
      "O",
      "X",
      "X",
      "O",
      " ",
      " ",
      " ",
      " ",
    ] as string[];
    const result = findWinner(boardState);
    expect(result).not.toBeDefined();
  });
  test("find winning sequence", () => {
    const boardState = [
      "O",
      "X",
      "O",
      "X",
      "X",
      "O",
      " ",
      " ",
      " ",
      " ",
    ] as string[];
    const result = findWinnerSequence(boardState);
    console.log(result);
    expect(result).toEqual([0, 1, 2]);
  });
});
