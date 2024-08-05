import type { Meta, StoryObj } from '@storybook/react';
import CartList from './CartList';
import { CART_LIST } from 'mock/carts';

export default {
  component: CartList,
  title: 'Components/CartList',
} as Meta;

type Story = StoryObj<typeof CartList>;

export const Default: Story = {
  args: { cartItems: CART_LIST },
};
