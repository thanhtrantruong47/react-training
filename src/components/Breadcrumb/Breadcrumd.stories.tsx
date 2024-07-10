import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumd from './Breadcrumd';

export default {
  component: Breadcrumd,
} as Meta;

type Story = StoryObj<typeof Breadcrumd>;

export const primaryBreadcrumd: Story = {
  args: {},
};
