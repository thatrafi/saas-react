import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamItem from './TeamItem';

describe('TeamItem Component', () => {
  test('should render without props', () => {
    render(<TeamItem />);
    const imgElement = screen.getByAltText('team1.png');
    const nameElement = screen.getByText('Name');
    const jobElement = screen.getByText('Job');
    expect(nameElement).toBeInTheDocument();
    expect(jobElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });

  test('should render with props', () => {
    const img = 'about1.png';
    const name = 'Rafi';
    const job = 'Engineer';
    render(<TeamItem name={name} job={job} img={img} />);
    const imgElement = screen.getByAltText(img);
    const nameElement = screen.getByText(name);
    const jobElement = screen.getByText(job);
    expect(nameElement).toBeInTheDocument();
    expect(jobElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });
});
