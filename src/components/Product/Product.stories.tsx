import type { Meta, StoryObj } from '@storybook/react';
import Product from './Product';
import { PRODUCT_DETAIL } from '../../mock/productDetail';

export default {
  component: Product,
  title: 'Components/ProductDetail',
} as Meta;

type Story = StoryObj<typeof Product>;

export const Default: Story = {
  args: { ...PRODUCT_DETAIL },
};
