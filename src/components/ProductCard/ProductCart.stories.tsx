import type { Meta, StoryObj } from '@storybook/react';
import ProductCart from './ProductCart';

export default {
  component: ProductCart,
} as Meta;

type Story = StoryObj<typeof ProductCart>;

export const primaryProductCart: Story = {
  args: {},
};
