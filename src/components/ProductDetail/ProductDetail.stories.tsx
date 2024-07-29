import type { Meta, StoryObj } from '@storybook/react';
import ProductDetail from './ProductDetail';
import { productDetails } from '../../mock/productDetail';

export default {
  component: ProductDetail,
  title: 'Components/ProductDetail',
} as Meta;

type Story = StoryObj<typeof ProductDetail>;

export const Default: Story = {
  args: { ...productDetails },
};
