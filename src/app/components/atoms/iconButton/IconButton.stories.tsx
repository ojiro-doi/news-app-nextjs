import { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'atoms/IconButton',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchButton: Story = {
  args: {
    icon: 'search',
  },
};
export const ThemeButton: Story = {
  args: {
    icon: 'theme',
  },
};

/**
 * GroupedButton
 */

// export const GroupedButton: Story = {
//   render: () => (
//     <div>
//       <IconButton icon="menu"  onClick={() => {}} />
//       <IconButton icon="search" themeColor="light" onClick={() => {}} />
//       <IconButton icon="theme" themeColor="light" onClick={() => {}} />
//     </div>
//   ),
// };
