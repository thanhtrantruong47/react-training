import type { Meta, StoryObj } from '@storybook/react';
import Quantity from './Quantity';

export default {
  component: Quantity,
} as Meta;

type Story = StoryObj<typeof Quantity>;

export const primaryQuantity: Story = {
  args: {},
};
