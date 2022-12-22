import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Board from "./board";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Board",
  component: Board,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof Board>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Board> = (args) => {
  const [nextPlayer, setNextPlayer] = React.useState("O");
  const [board, setBoard] = React.useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ] as string[]);
  function handelSquare(index: number) {
    const newState: string[] = [...board];
    newState[index] = nextPlayer as string;
    setNextPlayer(nextPlayer === "O" ? "X" : "O");
    setBoard(newState);
  }
  return <Board {...args} handelSquare={handelSquare} boardState={board} />;
};
export const BoardX = Template.bind({});
BoardX.args = {};
export const BoardO = Template.bind({});
BoardO.args = {};
