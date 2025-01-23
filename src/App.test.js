import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Roman Numeral Converter', () => {
  render(<App />);
  const linkElement = screen.getByText(/Roman Numeral Converter/i);
  expect(linkElement).toBeInTheDocument();
});
