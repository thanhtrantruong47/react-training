import type { Meta, StoryObj } from '@storybook/react';
import FooterNavList from './FooterNavList';

export default {
  component: FooterNavList,
  title: 'Components/FooterNavList',
} as Meta;

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Product', path: '/product' },
  { label: 'Categories', path: '/categories' },
  { label: 'Shop', path: '/shop' },
  { label: 'Log in', path: '/login' },
];

type Story = StoryObj<typeof FooterNavList>;

export const Default: Story = {
  args: { items: navItems },
};
