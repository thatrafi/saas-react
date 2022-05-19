import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import FooterLink from './FooterLink';

describe('Footer Link Component', () => {
  test('should render footerlink without props', () => {
    render(<FooterLink />);
    const headerElement = screen.getByText('Top Link');
    const linksElement = screen.getByTestId('links');
    expect(headerElement).toBeInTheDocument();
    expect(linksElement.childElementCount).toEqual(0);
  });
  test('should render footerlink with props', () => {
    const links = {
      header: 'Resources',
      links: [
        { pathname: 'Privacy Policy', link: '/' },
        { pathname: 'Terms and Condition', link: '/' },
        { pathname: 'Blog', link: '/' },
        { pathname: 'Contact Us', link: '/' }
      ]
    };
    render(
      <Router>
        <FooterLink links={links.links} headerLabel={links.header} />
      </Router>
    );
    const headerElement = screen.getByText(links.header);
    const linksElement = screen.getByTestId('links');
    expect(headerElement).toBeInTheDocument();
    expect(linksElement.childElementCount).toEqual(links.links.length);
  });
});
