import React from 'react';
import { screen, render } from '@testing-library/react';
import Button from './Button';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  test('Button click works', () => {
    // Arrange
    const mockedFunction = jest.fn();
    render(<Button onClick={mockedFunction} />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // Assert
    expect(mockedFunction).toHaveBeenCalled();
  });

  test('Button label is displayed even tho label props is not set', () => {
    // Arrange
    render(<Button />);
    // Act
    // Assert
    const labelElement = screen.getByText('Button');
    expect(labelElement).toBeInTheDocument();
  });

  test('Button label is displaying props.label value', () => {
    // Arrange
    const label = 'rafi';
    render(<Button label={label} />);
    // Act
    // Assert
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });
});
