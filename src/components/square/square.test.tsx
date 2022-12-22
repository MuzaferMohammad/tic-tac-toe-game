import React from 'react';
import { render, screen } from '@testing-library/react';
import Square from './square';

test("renders square", () => {
  render(<Square symbol="O" handleClick={() => console.log("clicked")} winner={false} />);
  const textItemWithO = screen.getByText(/O/i);
  expect(textItemWithO).toBeInTheDocument();

  render(<Square symbol="O" handleClick={() => console.log("clicked")} winner={false} />);
  const textItemWithX = screen.getByText(/X/i);
  expect(textItemWithX).toBeInTheDocument();
});