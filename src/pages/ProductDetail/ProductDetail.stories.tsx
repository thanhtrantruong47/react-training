import type { Meta, StoryObj } from '@storybook/react';
import ProductDetail from '.';

export default {
  component: ProductDetail,
  title: 'Components/Details',
} as Meta;

type Story = StoryObj<typeof ProductDetail>;

export const Default: Story = {
  args: {},
};
