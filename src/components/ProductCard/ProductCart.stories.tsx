import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '@/components';
import productImage from '@/assets/images/delete.svg';

export default {
  component: ProductCard,
  title: '@/components/ProductCart',
} as Meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    id: 5,
    title: 'Smart T-Shirt',
    description: ' Best quality',
    image: productImage,
    price: 40,
    rate: 999999,
    numberRating: 5,
  },
};
