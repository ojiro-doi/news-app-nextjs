import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeColorContext } from '@/contexts/ThemeColorContext';
import IconButton from '@/app/components/atoms/iconButton/IconButton';

describe('IconButton', () => {
  it('should render the correct icon based on the icon prop', () => {
    const { rerender, getByTestId } = render(
      <ThemeColorContext.Provider value={{ themeColor: 'light', setThemeColor: () => {} }}>
        <IconButton onClick={() => {}} icon="search" />
      </ThemeColorContext.Provider>
    );

    expect(getByTestId('icon'));

    rerender(
      <ThemeColorContext.Provider value={{ themeColor: 'light', setThemeColor: () => {} }}>
        <IconButton onClick={() => {}} icon="theme" />
      </ThemeColorContext.Provider>
    );

    expect(getByTestId('icon'));
  });

  it('should call onClick when the button is clicked', () => {
    const onClick = jest.fn();

    const { getByRole } = render(
      <ThemeColorContext.Provider value={{ themeColor: 'light', setThemeColor: () => {} }}>
        <IconButton onClick={onClick} icon="search" />
      </ThemeColorContext.Provider>
    );

    fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});