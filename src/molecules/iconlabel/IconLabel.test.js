import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconLabel from './IconLabel';

describe('Icon Label Component', () => {
  test('should render without props', () => {
    render(<IconLabel />);
    const iconElement = screen.getByAltText('Checked.png');
    const labelElement = screen.getByText('Label');
    const subtitleElement = screen.queryByTestId('subtitle');
    expect(iconElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(subtitleElement).toBeNull();
  });

  test('should render with props', () => {
    const icon = 'draft.png';
    const label = 'Hello';
    const subtitle = 'subs';
    render(<IconLabel iconSrc={icon} label={label} subtitle={subtitle} />);
    const iconElement = screen.getByAltText(icon);
    const labelElement = screen.getByText(label);
    const subtitleElement = screen.getByText(subtitle);
    expect(iconElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});
