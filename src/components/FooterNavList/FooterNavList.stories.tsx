import type { Meta, StoryObj } from '@storybook/react';
import FooterNavList from './FooterNavList';

export default {
  component: FooterNavList,
  title: 'Components/FooterNavList',
} as Meta;

type Story = StoryObj<typeof FooterNavList>;

export const Default: Story = {
  args: {},
};
