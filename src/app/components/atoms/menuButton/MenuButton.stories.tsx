import { Meta, StoryObj } from '@storybook/react';
import MenuButton from './MenuButton';

const meta: Meta<typeof MenuButton> = {
  component: MenuButton,
  title: 'atoms/MenuButton',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuButtonBase: Story = {
  args: {
    isOpen: false,
    toggleMenu: () => {},
  },
};
