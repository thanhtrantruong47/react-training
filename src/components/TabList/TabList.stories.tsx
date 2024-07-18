import type { Meta, StoryObj } from '@storybook/react';
import TabList from './TabList';

export default {
  component: TabList,
  title: 'Components/TabList',
} as Meta;

const navItems = ['T-Shirt', 'Jacket  ', 'Shirt', 'Jens'];

type Story = StoryObj<typeof TabList>;

export const Default: Story = {
  args: { listNavItems: navItems },
};
