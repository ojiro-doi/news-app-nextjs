import React from 'react';
import { render, screen } from '@testing-library/react';
import { TopicTitleContext, TopicTitleProvider } from './TopicTitleContext';

describe('Test TopicTitleContext', () => {
  it('provides default context values', () => {
    render(
      <TopicTitleProvider>
        <TopicTitleContext.Consumer>
          {({ topicTitle }) => <div data-testid="topic-title">{topicTitle}</div>}
        </TopicTitleContext.Consumer>
      </TopicTitleProvider>
    );

    const topicTitleElement = screen.getByTestId('topic-title');
    expect(topicTitleElement.textContent).toBe('Headlines');
  });

  it('updates context value', () => {
    render(
      <TopicTitleProvider>
        <TopicTitleContext.Consumer>
          {({ topicTitle, setTopicTitle }) => (
            <>
              <div data-testid="topic-title">{topicTitle}</div>
              <button onClick={() => setTopicTitle('New Title')} data-testid="update-button">Update</button>
            </>
          )}
        </TopicTitleContext.Consumer>
      </TopicTitleProvider>
    );

    const topicTitleElement = screen.getByTestId('topic-title');
    expect(topicTitleElement.textContent).toBe('Headlines');

    const updateButton = screen.getByTestId('update-button');
    updateButton.click();

    expect(topicTitleElement.textContent).toBe('New Title');
  });
});
