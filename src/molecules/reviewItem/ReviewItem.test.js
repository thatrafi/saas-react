import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewItem from './ReviewItem';

describe('ReviewItem Component', () => {
  test('should render without props', () => {
    render(<ReviewItem />);
    const commentElement = screen.getByText('Comment');
    const imgElement = screen.getByAltText('default.png');
    const nameElement = screen.getByText('Name');
    const jobElement = screen.getByText('Job');
    expect(commentElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(jobElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });

  test('should render with props', () => {
    const comment = 'New Comment';
    const img = 'about1.png';
    const name = 'Rafi';
    const job = 'Engineer';
    render(<ReviewItem comment={comment} name={name} title={job} image={img} />);
    const commentElement = screen.getByText(comment);
    const imgElement = screen.getByAltText(img);
    const nameElement = screen.getByText(name);
    const jobElement = screen.getByText(job);
    expect(commentElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(jobElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });
});
