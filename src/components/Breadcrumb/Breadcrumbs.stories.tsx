import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '@/components';
import { BREADCRUMBS } from '@/mock/breadcrumbs';

export default {
  component: Breadcrumb,
  title: '@/components/Breadcrumbs',
} as Meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: { items: BREADCRUMBS },
};
