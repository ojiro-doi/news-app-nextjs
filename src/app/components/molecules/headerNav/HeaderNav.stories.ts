import { Meta, StoryObj } from '@storybook/react';
import HeaderNav from './HeaderNav';

const meta: Meta<typeof HeaderNav> = {
  component: HeaderNav,
  title: 'molecules/HeaderNav',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderNavBase: Story = {
  args: {
    icon: 'menu',
    onClick: () => {
      alert('menu button clicked');
    },
  },
};


