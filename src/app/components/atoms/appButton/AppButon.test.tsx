import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AppButton from './AppButton';

describe('Test atoms AppButton', () => {
  it('renders a h1', () => {
    render(<AppButton />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
