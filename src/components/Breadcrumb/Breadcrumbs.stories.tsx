import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs',
} as Meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {},
};
