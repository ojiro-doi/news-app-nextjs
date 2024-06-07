import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import sideNavButton from './SideBarButton';
import { TopicTitleContext } from '@/contexts/TopicTitleContext';

describe('Test atoms sideNavButton', () => {
  it('renders a button with correct icon and title', () => {
    render(<sideNavButton path="/" title="Headlines" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const title = screen.getByText('Headlines');
    expect(title).toBeInTheDocument();
  });
});

it('onClick event', () => {
  const setTopicTitleMock = jest.fn();

  render(
    <TopicTitleContext.Provider value={{ topicTitle: '', setTopicTitle: setTopicTitleMock }}>
      <sideNavButton path="/" title="Headlines" />
    </TopicTitleContext.Provider>,
  );

  const button = screen.getByRole('link');
  fireEvent.click(button);
  expect(setTopicTitleMock).toHaveBeenCalledWith('Headlines');
});
