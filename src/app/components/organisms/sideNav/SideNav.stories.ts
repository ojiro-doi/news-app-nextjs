import { Meta, StoryObj } from '@storybook/react';
import SideNav from './SideNav';

/**
 * サイドナビゲーションのボタン
 */
const meta: Meta<typeof SideNav> = {
  component: SideNav,
  title: 'organisms/SideNav',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SideNavBase: Story = {};
