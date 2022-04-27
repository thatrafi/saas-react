import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from './Icon';

describe('Icon Component', () => {
  test('Icon : displaying default.png if src is empty', () => {
    // Arrange
    render(<Icon />);
    // Act
    const imgElement = screen.getByAltText('default.png');
    // Assert
    expect(imgElement).toBeInTheDocument();
  });

  test('Icon : displaying default.png if src is inexists', () => {
    // Arrange
    render(<Icon src="ajaja.png" />);
    // Act
    const imgElement = screen.getByAltText('default.png');
    // Assert
    expect(imgElement).toBeInTheDocument();
  });

  test('Icon : displaying src value if src is exists', () => {
    // Arrange
    const existsFile = 'email.png';
    render(<Icon src={existsFile} />);
    // Act
    const imgElement = screen.getByAltText(existsFile);
    // Assert
    expect(imgElement).toBeInTheDocument();
  });
});
