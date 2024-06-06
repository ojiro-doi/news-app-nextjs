import { Meta, StoryObj } from '@storybook/react';
import ThemeButton from './ThemeButton';

const meta: Meta<typeof ThemeButton> = {
  component: ThemeButton,
  title: 'atoms/ThemeButton',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ThemeButtonBase: Story = {
  args: {
  },
};

/**
 * GroupedButton
 */

// export const GroupedButton: Story = {
//   render: () => (
//     <div>
//       <ThemeButton icon="menu"  onClick={() => {}} />
//       <ThemeButton icon="search" themeColor="light" onClick={() => {}} />
//       <ThemeButton icon="theme" themeColor="light" onClick={() => {}} />
//     </div>
//   ),
// };
