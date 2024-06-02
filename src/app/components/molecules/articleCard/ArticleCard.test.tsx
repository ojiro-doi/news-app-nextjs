import React from 'react';
import { render, screen} from '@testing-library/react';
import ArticleCard from './ArticleCard';

describe('Test ArticleCard', () => {
  it('renders an Article', () => {
    const article = {
      title: 'Sample ArticleCard',
      url: 'https://example.com',
      urlToImage: 'https://example.com/image.jpg',
      publishedAt: new Date().toISOString(),
    };
    render(<ArticleCard article={article} />);

    const aTag = screen.getByRole('link');
    expect(aTag).toBeInTheDocument();

    const articleTitle = screen.getByText('Sample ArticleCard');
    expect(articleTitle).toBeInTheDocument();
  });
});