import type { Meta, StoryObj } from '@storybook/react';
import SelectedProduct from './SelectedProduct';

export default {
  component: SelectedProduct,
} as Meta;

type Story = StoryObj<typeof SelectedProduct>;

export const selectedProduct: Story = {
  args: {},
};
