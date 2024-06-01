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

export const ThemeLight: Story = {
  args: {
    path: '/topics/sports',
    title: 'Sports',
    themeColor: 'light',
    },
};

export const ThemeDark: Story = {
  args: {
    path: '/topics/sports',
    title: 'Sports',
    themeColor: 'dark',
    },
};