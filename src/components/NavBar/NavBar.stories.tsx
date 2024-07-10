import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar';
import { NavItem } from '../../types/navBar';

export default {
  component: NavBar,
  title: 'Components/NavBar',
} as Meta;

const navItems: NavItem[] = [
  { label: 'Home', destination: 'javascript:void(0)', isActive: true },
  { label: 'Shop', destination: 'javascript:void(0)', isActive: false },
  { label: 'About Us', destination: 'javascript:void(0)', isActive: false },
  { label: 'Contact', destination: 'javascript:void(0)', isActive: false },
];

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: { items: navItems },
};
