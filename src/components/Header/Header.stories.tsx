import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

export default {
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

export const header: Story = {
  args: {},
};
