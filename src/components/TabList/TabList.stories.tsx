import type { Meta, StoryObj } from '@storybook/react';
import { TabList } from '@/components';
import { BEST_SELLER_CATEGORY } from '@/constants';

export default {
  component: TabList,
  title: '@/components/TabList',
} as Meta;

type Story = StoryObj<typeof TabList>;

export const Default: Story = {
  args: { items: BEST_SELLER_CATEGORY },
};
