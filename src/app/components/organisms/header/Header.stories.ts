import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'organisms/Header',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderBase: Story = {

};

