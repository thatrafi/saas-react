import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TextArea from './TextArea';

describe('Textarea Component', () => {
  test('Textarea : onchange return same inputted value', () => {
    // Asset
    const onChangeMocked = jest.fn();
    render(<TextArea onChange={onChangeMocked} />);
    // Act
    const textAreaElement = screen.getByTestId('textAreaComp');
    userEvent.type(textAreaElement, 'hey lord');
    // Assert
    expect(textAreaElement).toHaveValue('hey lord');
  });
});
