import type { Meta, StoryObj } from '@storybook/react';
import CartList from './CartList';

export default {
  component: CartList,
} as Meta;

type Story = StoryObj<typeof CartList>;

export const primaryCartList: Story = {
  args: {},
};
