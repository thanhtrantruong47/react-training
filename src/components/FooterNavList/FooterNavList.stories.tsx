import type { Meta, StoryObj } from '@storybook/react';
import FooterNavList from './FooterNavList';

export default {
  component: FooterNavList,
} as Meta;

type Story = StoryObj<typeof FooterNavList>;

export const primaryFooterNavList: Story = {
  args: {},
};
