import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar';
import { NavItem } from '../../types/navBar';

export default {
  component: NavBar,
  title: 'Components/NavBar',
} as Meta;

const navItems: NavItem[] = [
  { label: 'Home', destination: '/', isActive: true },
  { label: 'Shop', destination: '/shop', isActive: false },
  { label: 'About Us', destination: '/about', isActive: false },
  { label: 'Contact', destination: '/contact', isActive: false },
];

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: { items: navItems },
};
