import { Meta, StoryObj } from '@storybook/react';
import ArticleList from './ArticleList';

const meta: Meta<typeof ArticleList> = {
  component: ArticleList,
  title: 'organisms/ArticleList',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleListBase: Story = {
  args: {
    articles: [
      {
        author: '',
        title:
          '【第21回】まひろ(吉高由里子)と父・為時(岸谷五朗)は越前国へ！新たな出会いが | 大河ドラマ「光る君へ」| 2分ダイジェスト | NHK - NHK',
        url: 'https://www.youtube.com/watch?v=2y9RJ-VH7ak',
        urlToImage: 'https://i.ytimg.com/vi/2y9RJ-VH7ak/maxresdefault.jpg',
        publishedAt: '2024-05-27T09:30:01Z',
      },
      {
        author: 'Hyonhee Shin',
        title: '日中韓首脳会合、中国首相「新たな始まり」 貿易などで共同宣言 - ロイター (Reuters Japan)',
        url: 'https://jp.reuters.com/world/china/WRK67HNNV5PA5KT6A5MDH2JAZI-2024-05-27/',
        urlToImage:
          'https://www.reuters.com/resizer/v2/AP3SGW3W3BPBFHROEFNQWNH2GE.jpg?auth=63a6ecbcfba70fd73f82bf92ff671219ce0ae76813f0ed6212b12f181619ca79&height=1005&width=1920&quality=80&smart=true',
        publishedAt: '2024-05-27T09:33:00Z',
      },
    ],
    topicTitle: 'article',
  },
};

export const ArticleList2: Story = {
  // args: {
  //   article: {
  //     author: 'Hyonhee Shin',
  //     title: '日中韓首脳会合、中国首相「新たな始まり」 貿易などで共同宣言 - ロイター (Reuters Japan)',
  //     url: 'https://jp.reuters.com/world/china/WRK67HNNV5PA5KT6A5MDH2JAZI-2024-05-27/',
  //     urlToImage:
  //       'https://www.reuters.com/resizer/v2/AP3SGW3W3BPBFHROEFNQWNH2GE.jpg?auth=63a6ecbcfba70fd73f82bf92ff671219ce0ae76813f0ed6212b12f181619ca79&height=1005&width=1920&quality=80&smart=true',
  //     publishedAt: '2024-05-27T09:33:00Z',
  //   },
  // },
};
