import type { Meta, StoryObj } from '@storybook/react';
import CartItem from './CartItem';

export default {
  component: CartItem,
  title: '@/components/CartItem',
} as Meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {
    color: 'blue',
    image: 'https://i.ibb.co/dKHpT4V/tall-shirt.png',
    quantity: 3,
    stock: 50,
    title: 'T-Shirt',
  },
};
