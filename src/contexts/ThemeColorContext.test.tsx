import React from 'react';
import { act,fireEvent, render, screen } from '@testing-library/react';
import { ThemeColorProvider, ThemeColorContext } from './ThemeColorContext';

describe('Test ThemeColorContext', () => {
  it('Correct Render and set default', () => {
    render(
      <ThemeColorProvider>
        <ThemeColorContext.Consumer>
          {({ themeColor }) => <div data-testid="theme-color">{themeColor}</div>}
        </ThemeColorContext.Consumer>
      </ThemeColorProvider>
    );
    
    const themeColorElement = screen.getByTestId('theme-color');
    expect(themeColorElement).toBeInTheDocument();
    expect(themeColorElement.textContent).toBe('light');
  });

  it('correct function of setThemeColor ', () => {
    render(
      <ThemeColorProvider>
        <ThemeColorContext.Consumer>
          {({ themeColor,setThemeColor }) => (
            <button onClick={() => setThemeColor('dark')} data-testid="set-theme-color-button">
              <div data-testid="theme-color">{themeColor}</div>
            </button>
          )}
        </ThemeColorContext.Consumer>
      </ThemeColorProvider>
    );

    const setThemeColorButton = screen.getByTestId('set-theme-color-button');
    act(() => {
      fireEvent.click(setThemeColorButton);
    });

    const themeColorElement = screen.getByTestId('theme-color');
    expect(themeColorElement.textContent).toBe('dark');
  });
});
