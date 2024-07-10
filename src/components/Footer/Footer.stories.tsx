import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

export default {
  component: Footer,
} as Meta;

type Story = StoryObj<typeof Footer>;

export const footer: Story = {
  args: {},
};
