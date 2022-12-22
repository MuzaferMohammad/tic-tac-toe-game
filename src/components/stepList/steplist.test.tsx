import React from 'react';
import { render } from '@testing-library/react';
import StepList from './steplist';

describe('test steplist', () => {
    test('renders a simple steplist with one item', () => {
      render(<StepList />);
    });
  });