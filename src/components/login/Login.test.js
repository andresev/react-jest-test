import { fireEvent, render, screen } from '@testing-library/react';
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
  expect(errorElement).not.toBeVisible();
});

test('User input should change', () => {
  render(Component);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  const testValue = 'test';

  fireEvent.change(userInputElement, { target: { value: testValue } });
  expect(userInputElement.value).toBe(testValue);
});

test('Password input should be change', () => {
  render(Component);
  const passwordInputElement = screen.getByPlaceholderText('password');
  const testValue = 'password';
  fireEvent.change(passwordInputElement, { target: { value: testValue } });
  expect(passwordInputElement.value).toBe(testValue);
});

test('Button should be enabled if inputs are filled', () => {
  render(Component);
  const buttonInputElement = screen.getByRole('button');
  const passwordInputElement = screen.getByPlaceholderText('password');
  const userInputElement = screen.getByPlaceholderText(/username/i);

  const testValue = 'test';
  fireEvent.change(userInputElement, { target: { value: testValue } });
  fireEvent.change(passwordInputElement, { target: { value: testValue } });

  expect(buttonInputElement).not.toBeDisabled();
});
