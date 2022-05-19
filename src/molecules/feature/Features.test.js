import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Features from './Features';

jest.mock('axios');

describe('Features Component', () => {
  test('Features : div className is nonBorderedItem if props border is false', () => {
    // Asset
    render(<Features border={false} />);
    // Act
    // Assert
    const divElement = screen.getByTestId('featuresDiv');
    expect(divElement.className).toEqual('nonBorderedItem');
  });

  test('Features : div className is borderedItem if props border is true', () => {
    // Asset
    render(<Features border={true} />);
    // Act
    // Assert
    const divElement = screen.getByTestId('featuresDiv');
    expect(divElement.className).toEqual('borderedItem');
  });

  test('Features : fetch success data features and display feature item', async () => {
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
    axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: features }));
    await Promise.resolve(axios.get('api/product/features')).then(function ({
      data: featureLists
    }) {
      render(<Features border={true} features={featureLists} />);
    });
    // Act
    // Assert
    const featureItemWrapperElement = screen.getByTestId('cardComp');
    expect(featureItemWrapperElement.childElementCount).toEqual(features.length);
  });

  test('Features : fetch success empty data features and not displaying feature item', async () => {
    // Asset
    const features = [];
    axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: features }));
    await Promise.resolve(axios.get('api/product/features')).then(function ({
      data: featureLists
    }) {
      render(<Features features={featureLists} />);
    });
    // Act
    // Assert
    const featureItemWrapperElement = screen.getByTestId('cardComp');
    expect(featureItemWrapperElement.childElementCount).toEqual(0);
  });

  test('Features : fetch failed data features and not displaying feature item', async () => {
    // Asset
    const errorData = {
      message: 'error'
    };
    axios.get.mockImplementation(() => Promise.resolve({ status: 400, data: errorData }));
    await Promise.resolve(axios.get('api/product/features')).then(function ({
      data: featureLists
    }) {
      render(<Features features={featureLists} />);
    });
    // Act
    // Assert
    const featureItemWrapperElement = screen.getByTestId('cardComp');
    expect(featureItemWrapperElement.childElementCount).toEqual(0);
  });
});
