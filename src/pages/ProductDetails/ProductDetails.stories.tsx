import type { Meta, StoryObj } from '@storybook/react';
import ProductDetails from '.';

export default {
  component: ProductDetails,
  title: 'Components/Details',
} as Meta;

type Story = StoryObj<typeof ProductDetails>;

export const Default: Story = {
  args: {},
};
