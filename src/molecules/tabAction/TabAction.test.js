import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabAction from './TabAction';

describe('Tab Action Component', () => {
  test('should not render without tabs props', () => {
    render(<TabAction />);
    const wrapper = screen.getByTestId('cardComp');
    expect(wrapper.childElementCount).toEqual(0);
  });

  test('should render with tabs props', () => {
    const tabs = ['tab1', 'tab2'];
    render(<TabAction tabs={tabs} />);
    const wrapper = screen.getByTestId('cardComp');
    expect(wrapper.childElementCount).toEqual(tabs.length);
  });
});
