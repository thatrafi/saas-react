import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import userEvent from '@testing-library/user-event';
import { footerLinks } from 'data/footerData';

describe('Footer Component', () => {
  test('should have all footer links', () => {
    // Asset
    render(
      <Router>
        <Footer />
      </Router>
    );
    // Act
    const linksElement = screen.getByTestId('footerlinks');
    // Assert
    expect(linksElement.childElementCount).toEqual(footerLinks.length);
  });

  test('Should capture email correctly onChange', () => {
    // Asset
    render(
      <Router>
        <Footer />
      </Router>
    );
    // Act
    const inputElement = screen.getByTestId('inputComp');
    userEvent.type(inputElement, 'Hell012@gmail.com');
    // Assert
    expect(inputElement).toHaveValue('Hell012@gmail.com');
  });

  test('Should submit form when submit button is clicked', () => {
    // Asset
    const emailTest = 'Hell012@gmail.com';
    render(
      <Router>
        <Footer />
      </Router>
    );
    // Act
    const inputElement = screen.getByTestId('inputComp');
    userEvent.type(inputElement, emailTest);
    const btnElement = screen.getByRole('button');
    userEvent.click(btnElement);
    const outputElement = screen.queryByText(`Thanks for subscribing ${emailTest}!`);
    // Assert
    expect(outputElement).toBeInTheDocument();
  });
});
