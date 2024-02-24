import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



test('renders form generator heading', () => {
  render(<App />);
  const headingElement = screen.getByText('Create Your Form');
  expect(headingElement).toBeInTheDocument();
});



  
