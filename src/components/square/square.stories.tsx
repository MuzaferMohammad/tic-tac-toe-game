import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Square from './square';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Square',
  component: Square,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick:{action:'clicked'}
  },
} as ComponentMeta<typeof Square>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Square> = (args) => <Square {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  symbol: ' ',
};

export const SquareO = Template.bind({});
SquareO.args = {
  symbol: 'O',
};
export const SquareX = Template.bind({});
SquareX.args = {
  symbol: 'X',
};