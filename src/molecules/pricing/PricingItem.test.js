import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PricingItem from './PricingItem';

describe('Pricing Item Component', () => {
  test('Should render without props', () => {
    render(<PricingItem />);
    const iconElement = screen.getByAltText('Facebook.png');
    const headerTitle = screen.getByText('Regular');
    const headerSubTitle = screen.getByText('Starter Plan');
    const featuresElement = screen.getByTestId('features');
    const priceElement = screen.getByText('$0,0');
    const buttonElement = screen.getByRole('button');
    expect(iconElement).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
    expect(headerSubTitle).toBeInTheDocument();
    expect(featuresElement.childElementCount).toEqual(0);
    expect(priceElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('Should render with props', () => {
    const icon = 'draft.png';
    const header = 'this is header';
    const headSub = 'this is header subtitle';
    const features = [
      { name: 'Limited Projects', isAvailable: true },
      { name: 'Regular Support Business', isAvailable: true },
      { name: '1 Month Free Trial', isAvailable: true },
      { name: '3GB Storage', isAvailable: true },
      { name: 'Ads Preview', isAvailable: true }
    ];
    const price = '$3000,00';
    render(
      <PricingItem
        headerIcon={icon}
        headerTitle={header}
        headerSubTitle={headSub}
        features={features}
        price={price}
      />
    );
    const iconElement = screen.getByAltText(icon);
    const headerTitle = screen.getByText(header);
    const headerSubTitle = screen.getByText(headSub);
    const featuresElement = screen.getByTestId('features');
    const priceElement = screen.getByText(price);
    expect(iconElement).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
    expect(headerSubTitle).toBeInTheDocument();
    expect(featuresElement.childElementCount).toEqual(features.length);
    expect(priceElement).toBeInTheDocument();
  });
});
