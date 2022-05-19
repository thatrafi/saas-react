import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reviews from './Reviews';

describe('Reviews Component', () => {
  test('should render with props', () => {
    const reviews = [
      {
        id: 'review1',
        name: 'Ron Wood',
        title: 'CEO',
        comment:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        image: 'team4.png'
      },
      {
        id: 'review2',
        name: 'Mark Mason',
        title: 'Marketing Manager',
        comment:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        image: 'beardedman.png'
      }
    ];
    render(<Reviews reviews={reviews} />);
    const wrapper = screen.getByTestId('reviewItems');
    expect(wrapper.childElementCount).toEqual(reviews.length);
  });
});
