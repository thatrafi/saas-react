import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';
import userEvent from '@testing-library/user-event';

describe('Input Component', () => {
  test('Input text : onchange return any inputted value', () => {
    // Asset
    const onChangeMock = jest.fn();
    render(<Input type="text" onChange={onChangeMock} />);
    // Act
    const inputElement = screen.getByTestId('inputComp');
    userEvent.type(inputElement, 'Hell012@');
    // Assert
    expect(inputElement).toHaveValue('Hell012@');
  });

  test('Input number : onchange return null value when typing non number', () => {
    // Asset
    const onChangeMock = jest.fn();
    render(<Input type="number" onChange={onChangeMock} />);
    // Act
    const inputElement = screen.getByTestId('inputComp');
    userEvent.type(inputElement, 'Hell012@');
    // Assert
    expect(inputElement).toHaveValue(null);
  });

  test('Input number : onchange return same value when typing number value', () => {
    // Asset
    const onChangeMock = jest.fn();
    render(<Input type="number" onChange={onChangeMock} />);
    // Act
    const inputElement = screen.getByTestId('inputComp');
    userEvent.type(inputElement, '1234');
    // Assert
    expect(inputElement).toHaveValue(1234);
  });

  test('Input date : onchange return empty value when typing non date', () => {
    // Asset
    const onChangeMock = jest.fn();
    render(<Input type="date" onChange={onChangeMock} />);
    // Act
    const inputElement = screen.getByTestId('inputComp');
    userEvent.type(inputElement, 'abcd');
    // Assert
    expect(inputElement).toHaveValue('');
  });

  test('Input date : onchange return same value when typing date value', () => {
    // Asset
    const onChangeMock = jest.fn();
    render(<Input type="date" onChange={onChangeMock} />);
    // Act
    const inputElement = screen.getByTestId('inputComp');
    userEvent.type(inputElement, new Date('2020-01-01').toISOString().split('T')[0]);
    // Assert
    expect(inputElement).toHaveValue(new Date('2020-01-01').toISOString().split('T')[0]);
  });
});
