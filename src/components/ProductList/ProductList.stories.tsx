import type { Meta, StoryObj } from '@storybook/react';
import ProductList from '.';
import { PRODUCT_LIST } from '../../mocks/productList';

export default {
  component: ProductList,
  title: 'Components/ProductList',
} as Meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: { products: PRODUCT_LIST },
};
