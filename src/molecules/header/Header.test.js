import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('should render without props', () => {
    // Asset
    render(
      <Router>
        <Header />
      </Router>
    );
    // Act
    // Assert
    const logoElement = screen.getByAltText('finsweet.png');
    const linksElement = screen.queryAllByRole('listitem');
    expect(logoElement).toBeInTheDocument();
    expect(linksElement).not.toHaveLength(0);
  });
});
