import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar';
import { NAV_BAR_ITEMS } from '../../constants';

export default {
  component: NavBar,
  title: 'Components/NavBar',
} as Meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: { listItemNavBar: NAV_BAR_ITEMS },
};
