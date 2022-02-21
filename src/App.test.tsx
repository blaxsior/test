import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('this is test!', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

test('my test1', () => {
  expect(3).toBeGreaterThan(2);
})

