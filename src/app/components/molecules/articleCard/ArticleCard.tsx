import moment from 'moment';
import Props from '../../../types/types';

const ArticleCard = ({ article, themeColor }: Props) => {
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

  let bgColorSelect;
  let textColorSelect;
  let borderColorSelect;
  switch (themeColor) {
    case 'light':
      bgColorSelect = 'bg-white';
      textColorSelect = 'text-black';
      borderColorSelect='border-textColor_lightTheme'
      break;
    case 'dark':
      bgColorSelect = 'bg-black';
      textColorSelect = 'text-white';
      borderColorSelect='border-textColor_darkTheme'
      break;
    default:
      bgColorSelect = 'bg-white';
      textColorSelect = 'text-black';
      borderColorSelect='border-textColor_lightTheme'
      break;
  }

  return (
    <div>
      {article && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center p-2 ${bgColorSelect} rounded-md border ${borderColorSelect} my-4 justify-between mx-auto container`}
        >
          <div className={'mx-2'}>
            <p className="text-xs ">{article.title}</p>
            <p className="text-xs text-gray-400">{time}時間前</p>
          </div>
          <img src={article.urlToImage} alt={article.title} className="w-12 h-12 object-cover rounded-md" />
        </a>
      )}
    </div>
  );
};

export default ArticleCard;
