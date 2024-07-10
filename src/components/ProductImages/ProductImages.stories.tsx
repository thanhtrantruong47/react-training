import type { Meta, StoryObj } from '@storybook/react';
import ProductImages from './ProductImages';

export default {
  component: ProductImages,
  title: 'Components/ProductImages',
} as Meta;

type Story = StoryObj<typeof ProductImages>;

export const Default: Story = {
  args: {},
};
