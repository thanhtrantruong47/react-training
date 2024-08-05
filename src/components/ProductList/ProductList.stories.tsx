import type { Meta, StoryObj } from '@storybook/react';
import ProductList from './ProductList';
import { PRODUCT_LIST } from 'mock/productList';

export default {
  component: ProductList,
  title: '@/components/ProductList',
} as Meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: { products: PRODUCT_LIST },
};
