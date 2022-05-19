import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from 'pages/About us/AboutPage';
const renderProviders = (ui) => render(ui, {});

describe('Features About Component', () => {
  test('should render error page when render undefined prop', () => {
    // Asset
    const { getByText } = renderProviders(<AboutPage />);
    // Action
    // Action
    const errorMessage = getByText('Ooops, something went wrong on', { exact: false });
    expect(errorMessage).toBeDefined();
  });
});
