import type { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating';

export default {
  component: Rating,
} as Meta;

type Story = StoryObj<typeof Rating>;

export const primaryRating: Story = {
  args: {},
};
