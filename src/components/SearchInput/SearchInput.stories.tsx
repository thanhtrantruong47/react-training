import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
  component: SearchInput,
  title: 'Components/SearchInput',
} as Meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: { placeholder: 'Search', inputType: 'input', onChange: () => {} },
};
