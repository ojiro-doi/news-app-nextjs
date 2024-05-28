import { Meta } from '@storybook/react';
import Circle from './Circle';

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'Example/Circle',
};

export default meta;

export const BaseCircle = {
  args: {
    variant: 'orange',
  },
};

export const GreenCircle = {
  args: {
    variant: 'green',
  },
};

export const YellowCircle = {
  args: {
    variant: 'yellow',
  },
};
