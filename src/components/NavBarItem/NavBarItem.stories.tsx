import type { Meta, StoryObj } from '@storybook/react';
import NavBarItem from './NavBarItem';

export default {
  component: NavBarItem,
} as Meta;

type Story = StoryObj<typeof NavBarItem>;

export const primaryNavBarItem: Story = {
  args: {},
};
