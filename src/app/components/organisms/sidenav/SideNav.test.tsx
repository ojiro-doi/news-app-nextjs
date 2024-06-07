import React from 'react';
import { render, screen } from '@testing-library/react';
import SideNav from './SideBar';

describe('Test SideNav', () => {
  it('renders SideNav', async () => {
    render(<SideNav />);
    const sideNav = screen.getByTestId('sideNav');
    expect(sideNav).toBeInTheDocument();
  });
});
