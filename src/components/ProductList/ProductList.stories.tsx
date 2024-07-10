import type { Meta, StoryObj } from '@storybook/react';
import ProductList from './ProductList';

export default {
  component: ProductList,
} as Meta;

type Story = StoryObj<typeof ProductList>;

export const primaryProductList: Story = {
  args: {},
};
