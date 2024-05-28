import { Meta, StoryObj } from '@storybook/react';
import SidenavButton from './SidenavButton';

/**
 * サイドナビゲーションのボタン
 */
const meta: Meta<typeof SidenavButton> = {
  component: SidenavButton,
  title: 'atoms/SidenavButton',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SportsButton: Story = {
  args: {
    icon: 'sports',
    themeColor: 'light',
    topic: 'sports',
    onClick: () => {
      alert('menu button clicked');
    },
  },
};
