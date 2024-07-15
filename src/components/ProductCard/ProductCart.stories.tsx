import type { Meta, StoryObj } from '@storybook/react';
import ProductCart from './ProductCart';
import productImage from '../../assets/images/detail-t-shirt.jpg';

export default {
  component: ProductCart,
  title: 'Components/ProductCart',
} as Meta;

type Story = StoryObj<typeof ProductCart>;

export const Default: Story = {
  args: {
    title: 'Smart T-Shirt',
    description: ' Best quality',
    image: productImage,
    price: 40,
    rating: 1,
    ratingNumbers: 5,
  },
};
