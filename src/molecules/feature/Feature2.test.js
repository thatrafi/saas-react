import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Features2 from './Features2';

describe('Features 2 Component', () => {
  test('render Features 2', () => {
    // Asset
    const features = [
      {
        icon: 'pel.png',
        title: 'lorem',
        desc: 'Lorem'
      },
      {
        icon: 'lap.png',
        title: 'lorem',
        desc: 'Lorem'
      }
    ];
    render(<Features2 features={features} />);
    // Act
    // Assert
    const featureItemWrapperElement = screen.getByTestId('featureItem');
    expect(featureItemWrapperElement.childElementCount).toEqual(features.length);
  });
});
