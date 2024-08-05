import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@/components';

export default {
  component: Logo,
  title: '@/components/Logo',
} as Meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};
