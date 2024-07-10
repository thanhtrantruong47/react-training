import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar';

export default {
  component: NavBar,
} as Meta;

type Story = StoryObj<typeof NavBar>;

export const navBar: Story = {
  args: {},
};
