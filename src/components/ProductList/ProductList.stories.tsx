import type { Meta, StoryObj } from '@storybook/react';
import ProductList from './ProductList';
import { Product } from '../../types/product';
import images from '../../assets/images/jacket.jpg';

const Products: Product[] = [
  {
    id: 1,
    title: 'T-Shirt',
    price: 14,
    images: [images],
    colors: [],
    sizes: ['blue', 'whilte'],
    description: 'description T-Shirt',
    stock: 45,
    rate: 31,
    numberRating: 2,
  },
  {
    id: 2,
    title: 'T-Shirt',
    price: 61,
    images: [images],
    colors: [],
    sizes: ['blue', 'whilte'],
    description: 'description T-Shirt',
    stock: 83,
    rate: 99,
    numberRating: 4,
  },
  {
    id: 3,
    title: 'T-Shirt',
    price: 40,
    images: [images],
    colors: [],
    sizes: [],
    description: 'description T-Shirt',
    stock: 6,
    rate: 73,
    numberRating: 3,
  },
  {
    id: 4,
    title: 'T-Shirt',
    price: 3,
    images: [images],
    colors: [],
    sizes: [],
    description: 'description T-Shirt',
    stock: 43,
    rate: 78,
    numberRating: 4,
  },
  {
    id: 5,
    title: 'T-Shirt',
    price: 63,
    images: [images],
    colors: [],
    sizes: [],
    description: 'description T-Shirt',
    stock: 87,
    rate: 37,
    numberRating: 4,
  },
  {
    id: 6,
    title: 'Jens',
    price: 63,
    images: [images],
    colors: [],
    sizes: [],
    description: 'description Jens',
    stock: 87,
    rate: 37,
    numberRating: 4,
  },
  {
    id: 7,
    title: 'T-Shirt',
    price: 63,
    images: [images],
    colors: [],
    sizes: [],
    description: 'description T-Shirt',
    stock: 87,
    rate: 37,
    numberRating: 4,
  },
  {
    id: 8,
    title: 'T-Shirt',
    price: 63,
    images: [images],
    colors: [],
    sizes: [],
    description: 'description T-Shirt',
    stock: 87,
    rate: 37,
    numberRating: 4,
  },
];
export default {
  component: ProductList,
  title: 'Components/ProductList',
} as Meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: { products: Products },
};
