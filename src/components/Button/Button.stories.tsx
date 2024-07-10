import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const primaryButton: Story = {
  args: {},
};
