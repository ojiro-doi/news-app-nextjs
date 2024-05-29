import React from 'react';
import Props from '../../types';

const ArticleCard = ({article}: Props) => {
  return (
    <div>
      {article && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2 rounded-md border my-4 bg-black"
        >
          <img src={article.urlToImage} alt={article.title} width={48} height={48} className="object-cover mr-4" />
          <div className="flex flex-col">
            <h4 className="text-xs text-white">{article.title}</h4>
          </div>
        </a>
      )}
    </div>
  );
};

export default ArticleCard;
