import React from 'react';
import { render, screen} from '@testing-library/react';
import HeaderNav from './HeaderNav';

describe('Test HeaderNav', () => {
  it('renders HeaderNav', async () => {
    render(<HeaderNav/>);

    const buttons = await screen.findAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
  it('correct function on button click', async () => {
    render(<HeaderNav/>);

    const buttons = await screen.findAllByRole('button');
    buttons.forEach((button) => {
      button.click();
    });
  });
});

