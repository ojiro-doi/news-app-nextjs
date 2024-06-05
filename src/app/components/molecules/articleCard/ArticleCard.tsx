import React from 'react';
import moment from 'moment';
import Props from '../../../types/types';

const ArticleCard = ({ article }: Props) => {
  if (!article) {
    return null;
  }
  const time =
    moment(article.publishedAt || moment.now())
      .fromNow()
      .slice(0, 1) == 'a'
      ? 1
      : moment(article.publishedAt || moment.now())
          .fromNow()
          .slice(0, 1);
  return (
    <div>
      {article && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2 rounded-md border my-4 bg-black justify-between mx-auto container "
        >
          <div className="mx-2">
            <p className="text-xs text-white">{article.title}</p>
            <p className="text-xs text-gray-400">{time}時間前</p>
          </div>
          <img src={article.urlToImage} alt={article.title} className="w-12 h-12 object-cover rounded-md" />
        </a>
      )}
    </div>
  );
};

export default ArticleCard;
