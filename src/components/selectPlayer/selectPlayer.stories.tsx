import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayerSelection from './selectPlayer';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/PlayerSelection ',
  component: PlayerSelection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof PlayerSelection>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PlayerSelection> = (args) => {
  const [player1, setPlayer1] = React.useState('X');
  const [player2, setPlayer2] = React.useState('O');
  const [initialPlayerIndex, setInitialPlayerIndex] = React.useState('1');

  function handlePlayer1Selection(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayer1(event.target.value.toUpperCase());
  }
  function handlePlayer2Selection(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayer2(event.target.value.toUpperCase());
  }
  function handleInitialPlayerIndex(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    setInitialPlayerIndex(event.target.value);
  }

 function getInitialPlayer() {
    if (initialPlayerIndex === '1') {
      return player1;
    } else {
      return player2;
    }
  }

  function getAlternatePlayer() {
    if (initialPlayerIndex === '2') {
      return player1;
    } else {
      return player2;
    }
  }



  return (
    <div>
    <PlayerSelection
      {...args}
      initialPlayerIndex={initialPlayerIndex}
      player1={player1}
      player2={player2}
      handlePlayer1Selection={handlePlayer1Selection}
      handlePlayer2Selection={handlePlayer2Selection}
      handleInitialPlayerIndex={handleInitialPlayerIndex}
    
    />
    <p className="first"> Player 1 : {player1}</p>
    <p className="first"> Player 2 : {player2}</p>
    <p className="first">Initial Player : {getInitialPlayer()}</p>
    <p className="first">AlternatePlayer: {getAlternatePlayer()}</p>
    </div>
  );
};

export const DefaultPlayer = Template.bind({});
DefaultPlayer.args = {};

export const disabledPlayer = Template.bind({});
disabledPlayer.args = {
  disabled:true
};
