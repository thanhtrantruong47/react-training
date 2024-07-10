import type { Meta, StoryObj } from '@storybook/react';
import TabList from './TabList';

export default {
  component: TabList,
  title: 'Components/TabList',
} as Meta;

type Story = StoryObj<typeof TabList>;

export const Default: Story = {
  args: {},
};
