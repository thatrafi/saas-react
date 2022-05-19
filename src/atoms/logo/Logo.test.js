import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';

describe('Logo Component', () => {
  test('Logo : displaying default.png if src is empty', () => {
    // Arrange
    render(<Logo />);
    // Act
    const imgElement = screen.getByAltText('default.png');
    // Assert
    expect(imgElement).toBeInTheDocument();
  });

  test('Logo : displaying default.png if src is inexists', () => {
    // Arrange
    render(<Logo src="ajaja.png" />);
    // Act
    const imgElement = screen.getByAltText('default.png');
    // Assert
    expect(imgElement).toBeInTheDocument();
  });

  test('Logo : displaying src value if src is exists', () => {
    // Arrange
    const existsFile = 'Logo_1.png';
    render(<Logo src={existsFile} />);
    // Act
    const imgElement = screen.getByAltText(existsFile);
    // Assert
    expect(imgElement).toBeInTheDocument();
  });
});
