import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoRow from './InfoRow';

describe('Info Row Component', () => {
  test('Info Row: Displaying all value if title headline subtitle desc props is inputted', () => {
    // Asset
    const title = 'title';
    const headline = 'headline';
    const subtitle = 'subtitle';
    const desc = 'desc';
    render(<InfoRow title={title} subtitle={subtitle} headline={headline} desc={desc} />);
    // Act
    const titleElement = screen.getByTestId('title');
    const headlineElement = screen.getByTestId('headline');
    const subtitleElement = screen.getByTestId('subtitle');
    const descElement = screen.getByTestId('desc');
    // Assert
    expect(titleElement).toHaveTextContent(title);
    expect(headlineElement).toHaveTextContent(headline);
    expect(subtitleElement).toHaveTextContent(subtitle);
    expect(descElement).toHaveTextContent(desc);
  });

  test('Info Row: title headline subtitle desc are not displayed if props empty', () => {
    // Asset
    render(<InfoRow />);
    // Act
    const titleElement = screen.queryByTestId('title');
    const headlineElement = screen.queryByTestId('headline');
    const subtitleElement = screen.queryByTestId('subtitle');
    const descElement = screen.queryByTestId('desc');
    // Assert
    expect(titleElement).toBeNull();
    expect(headlineElement).toBeNull();
    expect(subtitleElement).toBeNull();
    expect(descElement).toBeNull();
  });
});
