import type { Meta, StoryObj } from '@storybook/react';
import Cart from './Cart';

export default {
  component: Cart,
} as Meta;

type Story = StoryObj<typeof Cart>;

export const cart: Story = {
  args: {},
};
