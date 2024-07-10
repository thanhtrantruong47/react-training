import type { Meta, StoryObj } from '@storybook/react';
import Details from './Details';

export default {
  component: Details,
} as Meta;

type Story = StoryObj<typeof Details>;

export const primaryDetails: Story = {
  args: {},
};
