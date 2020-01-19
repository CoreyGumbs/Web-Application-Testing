import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

afterEach(cleanup);
it('Display component renders', () => {
  const {getByText} = render(<Display />);  
  expect(getByText(/player's at bat/i)).toBeInTheDocument();
});

it('Display renders elements', () => {
    const {getAllByTestId} = render(<Display />);
    const pElements = getAllByTestId('display-content');
    expect(pElements).toHaveLength(4);
    expect(pElements[3]).toHaveTextContent(/outs/i);
});