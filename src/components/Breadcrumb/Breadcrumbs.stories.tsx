import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs',
} as Meta;

const breadcrumbItems = [
  { label: 'Home', url: '/' },
  { label: 'Products', url: '/products' },
  { label: 'Category', url: '/products/category' },
  { label: 'Current Page' },
];

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: { listItems: breadcrumbItems },
};
