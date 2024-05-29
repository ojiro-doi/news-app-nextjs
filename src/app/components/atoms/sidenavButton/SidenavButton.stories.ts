import { Meta, StoryObj } from '@storybook/react';
import SideNavButton from './SideNavButton';

/**
 * サイドナビゲーションのボタン
 */
const meta: Meta<typeof SideNavButton> = {
  component: SideNavButton,
  title: 'atoms/SideNavButton',
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
