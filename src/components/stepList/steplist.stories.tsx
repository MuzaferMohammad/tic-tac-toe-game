import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StepList from './steplist';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/StepList',
  component: StepList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleStep: { action: 'clicked' },
  },
} as ComponentMeta<typeof StepList>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StepList> = (args) => {
  const [selectedStep, setSelectedStep] = React.useState(0);
  return (
    <StepList
      {...args}
      selectedStep={selectedStep}
      handleStep={setSelectedStep}
    />
  );
};
export const DefaultStepList = Template.bind({});
DefaultStepList.args = {};

export const StepListWithTwoItems = Template.bind({});
StepListWithTwoItems.args = {
  numberOfSteps: 2,
};

export const StepListWithTenItems = Template.bind({});
StepListWithTenItems.args = {
  numberOfSteps: 10,
};
