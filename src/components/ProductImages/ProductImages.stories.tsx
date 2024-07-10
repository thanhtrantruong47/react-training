import type { Meta, StoryObj } from '@storybook/react';
import ProductImages from './ProductImages';

export default {
  component: ProductImages,
} as Meta;

type Story = StoryObj<typeof ProductImages>;

export const productImages: Story = {
  args: {},
};
