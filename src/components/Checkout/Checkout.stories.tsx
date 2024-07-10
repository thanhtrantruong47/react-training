import type { Meta, StoryObj } from '@storybook/react';
import Checkout from './Checkout';

export default {
  component: Checkout,
} as Meta;

type Story = StoryObj<typeof Checkout>;

export const primaryCheckout: Story = {
  args: {},
};
