import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  test('Card onClick works', () => {
    // Arrange
    const mockedFunction = jest.fn();
    render(<Card onClick={mockedFunction} />);
    // Act
    const cardElement = screen.getByTestId('cardComp');
    userEvent.click(cardElement);
    // Assert
    expect(mockedFunction).toHaveBeenCalled();
  });
});
