import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import FeatureItem from './FeatureItem';

describe('Feature Item Component', () => {
  test('display default icon,title,and desc if props empty', () => {
    // Asset
    render(<FeatureItem />);
    // Act
    // Assert
    const iconElement = screen.getByAltText('Icon@2x-1.png');
    const titleElement = screen.getByText('Lorem ipsum dolor sit amet');
    const descElement = screen.getByText(
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    );
    expect(iconElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });

  test('display props icon,title,and desc value', () => {
    // Asset
    const icon = 'email.png';
    const title = 'title';
    const desc = 'desc';
    render(<FeatureItem iconSrc={icon} title={title} desc={desc} />);
    // Act
    // Assert
    const iconElement = screen.getByAltText(icon);
    const titleElement = screen.getByText(title);
    const descElement = screen.getByText(desc);
    expect(iconElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });

  test('if icon size props empty, display default size "medium"', () => {
    // Asset
    const icon = 'email.png';
    render(<FeatureItem iconSrc={icon} />);
    // Act
    // Assert
    const iconElement = screen.getByAltText(icon);
    expect(iconElement.className).toEqual('medium');
  });

  test('display inputted icon size props, if the size is available', () => {
    // Asset
    const icon = 'email.png';
    const size = 'big';
    render(<FeatureItem iconSrc={icon} size={size} />);
    // Act
    // Assert
    const iconElement = screen.getByAltText(icon);
    expect(iconElement.className).toEqual(size);
  });
});
