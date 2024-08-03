import type { Meta, StoryObj } from '@storybook/react';
import Logo from '.';

export default {
  component: Logo,
  title: 'Components/Logo',
} as Meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};
