type Article = {
  title: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
};

type Props = {
  articles?: Article[];
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
  themeColor?: 'light' | 'dark';
  // onClick: () => void;
  title?: string;
  path?: string;
  
};

export default Props;
