type Article = {
  title: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
};

type Props = {
  articles?: Article[];
  localArticles?: Article[];
  keywordArticle?: Article[];
  article?: Article;
  weather?: {
    current: {
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      };
    };
    forecast: {
      forecastday: [
        {
          date: string;
          day: {
            maxtemp_c: number;
            mintemp_c: number;
            avgtemp_c: number;
            condition: {
              icon: string;
              text: string;
            };
          };
        },
      ];
    };
    location: {
      name: string;
      localtime: string;
    };
  };
  topicTitle?: string;
  themeColor?: string;
  // onClick: () => void;
  path?: string;
  title?: string;
  keyword?: string;

  menuOpen?: boolean;
  searchOpen?: boolean;
  toggleMenu?: () => void;
  toggleSearch?: () => void;
};

export default Props;
