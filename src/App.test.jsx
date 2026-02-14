import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Chess Notation Trainer', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Chess Notation Trainer/i);
  expect(heading).toBeInTheDocument();
});
