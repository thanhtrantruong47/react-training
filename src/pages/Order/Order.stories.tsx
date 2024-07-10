import type { Meta, StoryObj } from '@storybook/react';
import Order from './Order';

export default {
  component: Order,
} as Meta;

type Story = StoryObj<typeof Order>;

export const primaryOrder: Story = {
  args: {},
};
