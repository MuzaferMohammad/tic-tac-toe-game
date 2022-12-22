import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Game from './game';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Game',
  component: Game,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Game>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Game> = (args) => <Game />;
export const GameDefault = Template.bind({});
GameDefault.args = {};
