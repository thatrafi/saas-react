import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoundedImage from './RoundedImage';

describe('RoundedImage Component', () => {
  test('RoundedImage : displaying default.png if src is empty', () => {
    // Arrange
    render(<RoundedImage />);
    // Act
    const imgElement = screen.getByAltText('default.png');
    // Assert
    expect(imgElement).toBeInTheDocument();
  });

  test('RoundedImage : displaying default.png if src is inexists', () => {
    // Arrange
    render(<RoundedImage src="ajaja.png" />);
    // Act
    const imgElement = screen.getByAltText('default.png');
    // Assert
    expect(imgElement).toBeInTheDocument();
  });

  test('RoundedImage : displaying src value if src is exists', () => {
    // Arrange
    const existsFile = 'dashboard.png';
    render(<RoundedImage src={existsFile} />);
    // Act
    const imgElement = screen.getByAltText(existsFile);
    // Assert
    expect(imgElement).toBeInTheDocument();
  });
});
