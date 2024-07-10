import type { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';

export default {
  component: Tab,
  title: 'Components/Tab',
} as Meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {},
};
