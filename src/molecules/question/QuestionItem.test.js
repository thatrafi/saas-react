import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionItem from './QuestionItem';
import userEvent from '@testing-library/user-event';

describe('Question Item Component', () => {
  test('should render without props', () => {
    render(<QuestionItem />);
    const iconElement = screen.getByAltText('Expander.png');
    const questionTitle = screen.getByText('Question Item');
    expect(iconElement).toBeInTheDocument();
    expect(questionTitle).toBeInTheDocument();
  });

  test('should render with props', () => {
    const title = 'Halo';
    const detail = 'Halo Detail';
    render(<QuestionItem question={title} detail={detail} />);
    const questionTitle = screen.getByText(title);
    expect(questionTitle).toBeInTheDocument();
  });

  test('should display detail when expander click with detail prop', () => {
    const detail = 'Halo Detail';
    render(<QuestionItem detail={detail} />);
    const iconElement = screen.getByAltText('Expander.png');
    userEvent.click(iconElement);
    const questionDetail = screen.getByText(detail);
    expect(questionDetail).toBeInTheDocument();
  });

  test('should display detail when expander click without detail prop', () => {
    render(<QuestionItem />);
    const iconElement = screen.getByAltText('Expander.png');
    userEvent.click(iconElement);
    const questionDetail = screen.getByText(
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    );
    expect(questionDetail).toBeInTheDocument();
  });
});
