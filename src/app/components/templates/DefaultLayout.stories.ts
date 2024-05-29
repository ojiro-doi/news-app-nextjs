import { Meta, StoryObj } from '@storybook/react';
import DefaultLayout from './DefaultLayout';

const meta: Meta<typeof DefaultLayout> = {
  component: DefaultLayout,
  title: 'templates/DefaultLayout',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLayoutBase: Story = {
  args: {
    article: {
      author: '',
      title:
        '【第21回】まひろ(吉高由里子)と父・為時(岸谷五朗)は越前国へ！新たな出会いが | 大河ドラマ「光る君へ」| 2分ダイジェスト | NHK - NHK',
      url: 'https://www.youtube.com/watch?v=2y9RJ-VH7ak',
      urlToImage: 'https://i.ytimg.com/vi/2y9RJ-VH7ak/maxresdefault.jpg',
      publishedAt: '2024-05-27T09:30:01Z',
    },
    keyword: 'article',
  },
};

