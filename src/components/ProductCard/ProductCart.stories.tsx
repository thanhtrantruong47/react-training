import type { Meta, StoryObj } from '@storybook/react';
import ProductCart from './ProductCart';

export default {
  component: ProductCart,
  title: 'Components/ProductCart',
} as Meta;

type Story = StoryObj<typeof ProductCart>;

export const Default: Story = {
  args: {},
};
