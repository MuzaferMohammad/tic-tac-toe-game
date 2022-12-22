import './steplist.css'

interface StepListProps {
    selectedStep?: number;
    numberOfSteps?: number;
    handleStep?: (stepIndex: number) => void;
  }
  const StepList = ({
    selectedStep = 0,
    numberOfSteps = 1,
    handleStep,
  }: StepListProps) => {
    const listItems = new Array(numberOfSteps).fill(0).map((_, index) => {
      const listText = index === 0 ? 'Go to start of game' : `Step ${index}`;
      const classes = index === selectedStep ? 'step selected' : 'step';
      return (
        <li
          className={classes}
          key={` ${index}`}
          onClick={() => handleStep?.(index)}
        >
          {listText}
        </li>
      );
    });
    return <ol>{listItems}</ol>;
  };

  export default StepList;