import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
  component: SearchInput,
} as Meta;

type Story = StoryObj<typeof SearchInput>;

export const primarySearchInput: Story = {
  args: {},
};
