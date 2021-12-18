import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Celebrity Web App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Celebrity Web App/i);
  expect(linkElement).toBeInTheDocument();
});
