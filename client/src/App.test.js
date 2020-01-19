import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  getByText(/player's at bat/i);
  getByText(/hit/i); 
});


