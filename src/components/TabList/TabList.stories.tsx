import type { Meta, StoryObj } from '@storybook/react';
import TabList from './TabList';

export default {
  component: TabList,
} as Meta;

type Story = StoryObj<typeof TabList>;

export const tabList: Story = {
  args: {},
};
