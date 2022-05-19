import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logos from './Logos';

describe('Logos Component', () => {
  test('should render logos without props', () => {
    render(<Logos />);
    const wrapper = screen.getByTestId('logoItems');
    expect(wrapper.childElementCount).not.toEqual(0);
  });
});
