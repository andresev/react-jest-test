import { render, screen } from '@testing-library/react';
import Login from './Login';

const Component = <Login />;

test('User input should be rendered', () => {
  render(Component);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement).toBeInTheDocument();
});

test('Password input should be rendered', () => {
  render(Component);
  const passwordInputElement = screen.getByPlaceholderText('password');
  expect(passwordInputElement).toBeInTheDocument();
});

test('button should be rendered', () => {
  render(Component);
  const buttonInputElement = screen.getByRole('button');
  expect(buttonInputElement).toBeInTheDocument();
});

test('User input should be empty', () => {
  render(Component);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement.value).toBe('');
});

test('Password input should be empty', () => {
  render(Component);
  const passwordInputElement = screen.getByPlaceholderText('password');
  expect(passwordInputElement.value).toBe('');
});

test('Button should be disabled', () => {
  render(Component);
  const buttonInputElement = screen.getByRole('button');
  expect(buttonInputElement).toBeDisabled();
});

test('error message should not be visible', () => {
  render(Component);
  const errorElement = screen.getByTestId('error');
  expect(errorElement.textContent).toBe('');
});
