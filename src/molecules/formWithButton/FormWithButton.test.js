import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormWithButton from './FormWithButton';
import userEvent from '@testing-library/user-event';

describe('FormWithButton Component', () => {
  test('should have a text field', () => {
    // Asset
    render(<FormWithButton />);
    // Act
    const inputElement = screen.getByTestId('inputComp');
    // Assert
    expect(inputElement).toBeInTheDocument();
  });
  test('should have a button', () => {
    // Asset
    render(<FormWithButton />);
    // Act
    const btnElement = screen.getByRole('button');
    // Assert
    expect(btnElement).toBeInTheDocument();
  });
  test('Should capture input value correctly onChange', () => {
    // Asset
    render(<FormWithButton />);
    // Act
    const inputElement = screen.getByTestId('inputComp');
    userEvent.type(inputElement, '12313');
    // Assert
    expect(inputElement).toHaveValue('12313');
  });

  test('Should submit form when submit button is clicked', () => {
    // Asset
    const inputTest = 'happier';
    const onClickedMocked = jest.fn();
    render(<FormWithButton onButtonClicked={onClickedMocked} />);
    // Act
    const inputElement = screen.getByTestId('inputComp');
    userEvent.type(inputElement, inputTest);
    const btnElement = screen.getByRole('button');
    userEvent.click(btnElement);
    // Assert
    expect(inputElement).toHaveValue(inputTest);
  });
});
