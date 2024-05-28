type Article = {
  author: string;
  title: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
};

type Props = {
  articles?: Article[];
  article?: Article;
  title?: string;
  weatherNews?: {
    current: {
      temp: number;
      clouds: number;
      weather: [
        conditions: {
          main: string;
          icon: string;
        },
      ];
    };
    daily: [
      date: {
        dt: number;
        clouds: number;
        temp: {
          min: number;
          max: number;
        };
        weather: [
          conditions: {
            id: number;
            icon: string;
          },
        ];
      },
    ];
  };
  keyword?: string | 'headline';
};

export default Props;
