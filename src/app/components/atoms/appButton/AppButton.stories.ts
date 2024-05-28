import { Meta, StoryObj } from '@storybook/react';
import AppButton from './AppButton';

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  title: 'atoms/AppButton',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AppButtonBase: Story = {

};

