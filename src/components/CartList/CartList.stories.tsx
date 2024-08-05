import type { Meta, StoryObj } from '@storybook/react';
import { CartList } from '@/components';
import { CART_LIST } from '@/mock/carts';

export default {
  component: CartList,
  title: '@/components/CartList',
} as Meta;

type Story = StoryObj<typeof CartList>;

export const Default: Story = {
  args: { cartItems: CART_LIST },
};
