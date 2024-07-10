import type { Meta, StoryObj } from '@storybook/react';
import ProductDetail from './ProductDetail';

export default {
  component: ProductDetail,
} as Meta;

type Story = StoryObj<typeof ProductDetail>;

export const primaryProductDetail: Story = {
  args: {},
};
