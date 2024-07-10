import type { Meta, StoryObj } from '@storybook/react';
import CartItem from './CartItem';

export default {
  component: CartItem,
  title: 'Components/CartItem',
} as Meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {},
};
