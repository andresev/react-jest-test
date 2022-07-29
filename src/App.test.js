import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 2 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole('listitem');

  //Many ways of doing with Jest Methods.
  expect(listItems.length).toEqual(2);
});

test('renders title', () => {
  render(<App />);
  const title = screen.getByTestId('mytestid');
  expect(title).toBeInTheDocument();
});

test('sum should be 6', () => {
  render(<App />);
  const sum = screen.getByTitle('sum');
  expect(parseInt(sum.textContent)).toEqual(6);
});
