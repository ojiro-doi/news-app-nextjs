import { Meta, StoryObj } from '@storybook/react';
import SideNavList from './SideNavList';

/**
 * サイドナビゲーションのボタン
 */
const meta: Meta<typeof SideNavList> = {
  component: SideNavList,
  title: 'molecules/SideNavList',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SideNavListBase: Story = {
  args: {
    path: '/topics/sports',
    title: 'Sports',
  },
};
