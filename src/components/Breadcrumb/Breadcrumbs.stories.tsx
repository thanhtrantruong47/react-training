import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

export default {
  component: Breadcrumbs,
} as Meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const breadcrumbs: Story = {
  args: {},
};
