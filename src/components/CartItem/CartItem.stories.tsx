import type { Meta, StoryObj } from '@storybook/react';
import CartItem from './CartItem';

export default {
  component: CartItem,
} as Meta;

type Story = StoryObj<typeof CartItem>;

export const primaryCartItem: Story = {
  args: {},
};
