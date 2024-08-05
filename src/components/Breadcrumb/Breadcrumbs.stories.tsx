import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import { BREADCRUMBS } from 'mock/breadcrumbs';

export default {
  component: Breadcrumbs,
  title: '@/components/Breadcrumbs',
} as Meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: { items: BREADCRUMBS },
};
